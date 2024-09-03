window.BENCHMARK_DATA = {
  "lastUpdate": 1725398873304,
  "repoUrl": "https://github.com/andnp/ml-instrumentation",
  "entries": {
    "Python Benchmark with pytest-benchmark": [
      {
        "commit": {
          "author": {
            "email": "andnpatterson@gmail.com",
            "name": "andnp",
            "username": "andnp"
          },
          "committer": {
            "email": "andnpatterson@gmail.com",
            "name": "Andy Patterson",
            "username": "andnp"
          },
          "distinct": true,
          "id": "0c23edd46a1755cc70c99a1153e64ee3dca9f57e",
          "message": "ci: add initial tooling script",
          "timestamp": "2024-08-30T10:03:49-06:00",
          "tree_id": "f57234b160fc0a02a95d6dd63d171e03fc13d81d",
          "url": "https://github.com/andnp/ml-instrumentation-archived/commit/0c23edd46a1755cc70c99a1153e64ee3dca9f57e"
        },
        "date": 1725398755068,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_Collector.py::test_benchmark_write_path1[basic_collector]",
            "value": 147.83268446516956,
            "unit": "iter/sec",
            "range": "stddev: 0.0020886163795779695",
            "extra": "mean: 6.764403985612581 msec\nrounds: 139"
          },
          {
            "name": "tests/performance/test_Collector.py::test_benchmark_write_path1[disk_collector]",
            "value": 98.26454549470019,
            "unit": "iter/sec",
            "range": "stddev: 0.0018986335864449437",
            "extra": "mean: 10.17661044444493 msec\nrounds: 63"
          },
          {
            "name": "tests/performance/test_Collector.py::test_benchmark_read1[basic_collector]",
            "value": 435.2041153743879,
            "unit": "iter/sec",
            "range": "stddev: 0.0011753717758067983",
            "extra": "mean: 2.2977723892609374 msec\nrounds: 447"
          },
          {
            "name": "tests/performance/test_Collector.py::test_benchmark_read1[disk_collector]",
            "value": 428.4347293752265,
            "unit": "iter/sec",
            "range": "stddev: 0.001247918561975883",
            "extra": "mean: 2.3340778219783207 msec\nrounds: 455"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andnpatterson@gmail.com",
            "name": "Andy Patterson",
            "username": "andnp"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d1f69ac18ab62f191d1e4db225c5dd4347c89766",
          "message": "chore: add link to performance benchmarks",
          "timestamp": "2024-09-03T15:27:24-06:00",
          "tree_id": "2c75e6010c0325e87f7291cb50c1b2a978d5fb31",
          "url": "https://github.com/andnp/ml-instrumentation/commit/d1f69ac18ab62f191d1e4db225c5dd4347c89766"
        },
        "date": 1725398872547,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_Collector.py::test_benchmark_write_path1[basic_collector]",
            "value": 150.15066043249777,
            "unit": "iter/sec",
            "range": "stddev: 0.0018448178558078158",
            "extra": "mean: 6.659977366197222 msec\nrounds: 142"
          },
          {
            "name": "tests/performance/test_Collector.py::test_benchmark_write_path1[disk_collector]",
            "value": 110.28544753497071,
            "unit": "iter/sec",
            "range": "stddev: 0.001701711163992968",
            "extra": "mean: 9.067379444444901 msec\nrounds: 63"
          },
          {
            "name": "tests/performance/test_Collector.py::test_benchmark_read1[basic_collector]",
            "value": 457.26502427331656,
            "unit": "iter/sec",
            "range": "stddev: 0.0008371125921450778",
            "extra": "mean: 2.1869155673762615 msec\nrounds: 423"
          },
          {
            "name": "tests/performance/test_Collector.py::test_benchmark_read1[disk_collector]",
            "value": 465.5815141044911,
            "unit": "iter/sec",
            "range": "stddev: 0.00001807038789483753",
            "extra": "mean: 2.147851600000529 msec\nrounds: 85"
          }
        ]
      }
    ]
  }
}