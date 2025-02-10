from functools import partial
import jax
import jax.experimental
from ml_instrumentation.Collector import Collector
from ml_instrumentation.Writer import SqlPoint

def test_collector_jax_jit(basic_collector: Collector):
    basic_collector.set_experiment_id(0)
    basic_collector.next_frame()

    @partial(jax.jit, static_argnums=(1,))
    def f(x: jax.Array, collector: Collector):
        y = 2 * x
        y = y.dot(y)
        collector.collect_jax('m1', y)
        return y

    x = jax.numpy.array([0, 1, 2, 3])
    y = f(x, basic_collector)

    assert y == 56
    assert basic_collector.get('m1', 0) == [
        SqlPoint(frame=0, id=0, measurement=56)
    ]

def test_collector_jax_grad(basic_collector: Collector):
    basic_collector.set_experiment_id(0)
    basic_collector.next_frame()

    @partial(jax.jit, static_argnums=(1,))
    @jax.grad
    def f(x: jax.Array, collector: Collector):
        y = 2 * x
        y = y.dot(y)
        collector.collect_jax('m1', y)
        return y

    x = jax.numpy.array([0, 1, 2, 3.])
    f(x, basic_collector)

    assert basic_collector.get('m1', 0) == [
        SqlPoint(frame=0, id=0, measurement=56)
    ]

def test_collector_jax_vmap(basic_collector: Collector):
    basic_collector.set_experiment_id(0)
    basic_collector.next_frame()

    @partial(jax.jit, static_argnums=(1,))
    @partial(jax.vmap, in_axes=(0, None), out_axes=0)
    def f(x: jax.Array, collector: Collector):
        y = 2 * x
        y = y.dot(y)
        collector.collect_jax('m1', y)
        return y

    x = jax.numpy.array([
        [0, 1, 2, 3.],
        [1, 1, 2, 3.],
    ])
    f(x, basic_collector)

    assert basic_collector.get('m1', 0) == [
        SqlPoint(frame=0, id=0, measurement=56),
        SqlPoint(frame=0, id=0, measurement=60),
    ]
