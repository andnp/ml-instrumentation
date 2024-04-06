from typing import Any, Callable, Dict
from ml_instrumentation.Sampler import Sampler, Ignore, Identity
from ml_instrumentation.Writer import Writer, Point

"""doc
A frame-based data collection utility.
The collector stores some context---which index is currently being run, what is the current timestep, etc.---
and associates collected data with this context.

Example usage:
```python
collector = Collector(
  config={
    # a dictionary mapping keys -> data preprocessors
    # for instance performing fixed-window averaging
    'return': Window(100),
    # or subsampling 1 of every 100 values
    'reward': Subsample(100),
    # or moving averages
    'error': MovingAverage(0.99),
    # or ignored entirely
    'special': Ignore(),
  },
  # by default, if a key is not mentioned above it is stored as-is
  # however this can be changed by passing a default preprocessor
  default=Identity()
)

# tell the collector what idx of the experiment we are currently processing
collector.setIdx(0)

for step in range(exp.max_steps):
  # tell the collector to increment the frame
  collector.next_frame()

  # these values will be associated with the current idx and frame
  collector.collect('reward', r)
  collector.collect('error', delta)

  # not all values need to be stored at each frame
  if step % 100 == 0:
    collector.collect('special', 'test value')
```
"""
class Collector:
    def __init__(
        self,
        tmp_file: str = ':memory:',
        config: Dict[str, Sampler | Ignore] = {},
        default: Identity | Ignore = Identity(),
        experiment_id: int | str | None = None,
    ):
        self._c = config

        self._ignore = set(k for k, sampler in config.items() if isinstance(sampler, Ignore))
        self._sampler: Dict[str, Sampler] = {
            k: sampler for k, sampler in config.items() if not isinstance(sampler, Ignore)
        }

        self._tmp_file = tmp_file
        self._writer = Writer(
            db_path=self._tmp_file,
            low_watermark=1024,
            high_watermark=2048,
        )

        self._exp_id = experiment_id
        self._frame: int = -1

        # create this once and cache it since it is stateless
        # avoid recreating on every step
        self._def = default

        # cache some useful metadata
        self._idxs = set[int | str]()
        self._keys = set[str]()

    # -------------
    # -- Context --
    # -------------
    def set_experiment_id(self, id: str | int):
        self._exp_id = id

    def get_current_experiment_id(self) -> str | int:
        assert self._exp_id is not None
        return self._exp_id

    def next_frame(self):
        self._frame += 1

    def reset(self):
        self.next_frame()
        for k in self._sampler:
            v = self._sampler[k].end()
            if v is None:
                continue

            self._write(k, v)

        self.next_frame()
        self._frame = -1

    def close(self):
        self._writer.close()

    # -------------
    # -- Storing --
    # -------------
    def collect(self, name: str, value: Any):
        if name in self._ignore:
            return

        v = self._sampler.get(name, self._def).next(value)
        if v is None:
            return

        self._write(name, v)

    def evaluate(self, name: str, lmbda: Callable[[], Any]):
        if name in self._ignore:
            return

        v = self._sampler.get(name, self._def).next_eval(lmbda)
        if v is None:
            return

        self._write(name, v)

    # ---------------
    # -- Accessing --
    # ---------------
    def get(self, metric: str, experiment_id: int | str):
        return self._writer.read_metric(metric, experiment_id)

    def keys(self):
        return self._keys

    def experiment_ids(self):
        return self._idxs

    # --------------
    # -- Internal --
    # --------------
    def _write(self, k: str, v: Any):
        self._keys.add(k)
        d = Point(
            exp_id=self.get_current_experiment_id(),
            metric=k,
            frame=self._frame,
            data=v,
        )
        self._writer.write(d)

    # -------------------
    # -- Serialization --
    # -------------------

    def __getstate__(self):
        self._writer.close()
        ignore_keys = ['_writer']
        return {
            k: v for k, v in self.__dict__.items() if k not in ignore_keys
        }

    def __setstate__(self, state):
        for k, v in state.items():
            self.__dict__[k] = v

        self._writer = Writer(
            db_path=self._tmp_file,
            low_watermark=1024,
            high_watermark=2048,
        )
