window.BENCHMARK_DATA = {
  "lastUpdate": 1730389587163,
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
          "id": "f4859c451c0fc25abd5ff9a374cc4633697371f3",
          "message": "chore: separate benchmarks onto new line",
          "timestamp": "2024-09-03T15:27:50-06:00",
          "tree_id": "686af02234c0a8446d673f446d920753ea2826da",
          "url": "https://github.com/andnp/ml-instrumentation/commit/f4859c451c0fc25abd5ff9a374cc4633697371f3"
        },
        "date": 1725398896835,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_Collector.py::test_benchmark_write_path1[basic_collector]",
            "value": 153.43170846110422,
            "unit": "iter/sec",
            "range": "stddev: 0.0014888778743222004",
            "extra": "mean: 6.51755761589206 msec\nrounds: 151"
          },
          {
            "name": "tests/performance/test_Collector.py::test_benchmark_write_path1[disk_collector]",
            "value": 107.74150235868652,
            "unit": "iter/sec",
            "range": "stddev: 0.0018875604224101474",
            "extra": "mean: 9.281474437500048 msec\nrounds: 64"
          },
          {
            "name": "tests/performance/test_Collector.py::test_benchmark_read1[basic_collector]",
            "value": 461.7882922643476,
            "unit": "iter/sec",
            "range": "stddev: 0.0006332886566742504",
            "extra": "mean: 2.1654944847054645 msec\nrounds: 425"
          },
          {
            "name": "tests/performance/test_Collector.py::test_benchmark_read1[disk_collector]",
            "value": 445.61991111201,
            "unit": "iter/sec",
            "range": "stddev: 0.0006945299242495214",
            "extra": "mean: 2.2440648971554644 msec\nrounds: 457"
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
          "id": "338baf3dafc85eb8076523d8eacb6a8da9c34b6f",
          "message": "Merge pull request #3 from andnp/dependabot/pip/deps-e5bd3890c3\n\nchore(deps): update numpy requirement from <=2.1.0,>=1.26 to >=1.26,<=2.1.1 in the deps group",
          "timestamp": "2024-09-09T09:07:49-06:00",
          "tree_id": "8687d34dc9726d91f692c08a19ecda4ba998722b",
          "url": "https://github.com/andnp/ml-instrumentation/commit/338baf3dafc85eb8076523d8eacb6a8da9c34b6f"
        },
        "date": 1725894498255,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_Collector.py::test_benchmark_write_path1[basic_collector]",
            "value": 153.69669982753177,
            "unit": "iter/sec",
            "range": "stddev: 0.0019630607151080747",
            "extra": "mean: 6.506320572413941 msec\nrounds: 145"
          },
          {
            "name": "tests/performance/test_Collector.py::test_benchmark_write_path1[disk_collector]",
            "value": 112.54349825388064,
            "unit": "iter/sec",
            "range": "stddev: 0.0021731179450522136",
            "extra": "mean: 8.885453318184187 msec\nrounds: 66"
          },
          {
            "name": "tests/performance/test_Collector.py::test_benchmark_read1[basic_collector]",
            "value": 448.7505967523076,
            "unit": "iter/sec",
            "range": "stddev: 0.0009873535471919097",
            "extra": "mean: 2.2284092929061 msec\nrounds: 437"
          },
          {
            "name": "tests/performance/test_Collector.py::test_benchmark_read1[disk_collector]",
            "value": 449.68372474680797,
            "unit": "iter/sec",
            "range": "stddev: 0.0010061673999587765",
            "extra": "mean: 2.2237851738197656 msec\nrounds: 466"
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
            "email": "andnpatterson@gmail.com",
            "name": "Andy Patterson",
            "username": "andnp"
          },
          "distinct": true,
          "id": "6ee31e6ccf43d9a1a38999bd67b00f85e4aaeac1",
          "message": "test: ensure frame is correctly restored after serde",
          "timestamp": "2024-10-31T09:46:00-06:00",
          "tree_id": "1906287573e68f6e39097b552f98f9f58733074b",
          "url": "https://github.com/andnp/ml-instrumentation/commit/6ee31e6ccf43d9a1a38999bd67b00f85e4aaeac1"
        },
        "date": 1730389586293,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_Collector.py::test_benchmark_write_path1[basic_collector]",
            "value": 150.1981105255072,
            "unit": "iter/sec",
            "range": "stddev: 0.0022932625454372196",
            "extra": "mean: 6.657873368055295 msec\nrounds: 144"
          },
          {
            "name": "tests/performance/test_Collector.py::test_benchmark_write_path1[disk_collector]",
            "value": 111.42812476645278,
            "unit": "iter/sec",
            "range": "stddev: 0.002191249915146302",
            "extra": "mean: 8.974394948276702 msec\nrounds: 58"
          },
          {
            "name": "tests/performance/test_Collector.py::test_benchmark_read1[basic_collector]",
            "value": 444.8725721557972,
            "unit": "iter/sec",
            "range": "stddev: 0.0011896674833861824",
            "extra": "mean: 2.2478346892777052 msec\nrounds: 457"
          },
          {
            "name": "tests/performance/test_Collector.py::test_benchmark_read1[disk_collector]",
            "value": 438.63181897457434,
            "unit": "iter/sec",
            "range": "stddev: 0.0012156038617847367",
            "extra": "mean: 2.2798163670337055 msec\nrounds: 455"
          }
        ]
      }
    ]
  }
}