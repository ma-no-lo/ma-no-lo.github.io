(() => {
  let myChart = echarts.init(document.querySelector("#amiddboxtbott2"));
  setTimeout(function () {
    let option = {
      tooltip: {
        trigger: "axis",
        showContent: false,
      },
      dataset: {
        source: [
          ["product", "5", "6", "7", "8", "9", "10"],
          ["智科", 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],
          ["电科", 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
          ["通信", 40.1, 62.2, 69.5, 36.4, 45.2, 32.5],
          ["电信", 25.2, 37.1, 41.2, 18, 33.9, 49.1],
          ["物联网", 25.2, 37.1, 41.2, 18, 33.9, 49.1],
        ],
      },
      xAxis: {
        type: "category",
        axisTick: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: "#fff",
            opacity: 0.5,
          },
        },
      },
      yAxis: {
        gridIndex: 0,
        axisLabel: {},
        axisTick: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: "#fff",
            opacity: 0.5,
          },
        },
      },
      grid: { top: "50%" },
      series: [
        {
          type: "line",
          smooth: true,
          seriesLayoutBy: "row",
          emphasis: { focus: "series" },
        },
        {
          type: "line",
          smooth: true,
          seriesLayoutBy: "row",
          emphasis: { focus: "series" },
        },
        {
          type: "line",
          smooth: true,
          seriesLayoutBy: "row",
          emphasis: { focus: "series" },
        },
        {
          type: "line",
          smooth: true,
          seriesLayoutBy: "row",
          emphasis: { focus: "series" },
        },
        {
          type: "line",
          smooth: true,
          seriesLayoutBy: "row",
          emphasis: { focus: "series" },
        },
        {
          type: "pie",
          id: "pie",
          radius: "30%",
          center: ["50%", "25%"],
          emphasis: {
            focus: "self",
          },
          label: {
            formatter: "{b}: {@2012} ({d}%)",
          },
          encode: {
            itemName: "product",
            value: "2012",
            tooltip: "2012",
          },
        },
      ],
    };
    myChart.on("updateAxisPointer", function (event) {
      const xAxisInfo = event.axesInfo[0];
      if (xAxisInfo) {
        const dimension = xAxisInfo.value + 1;
        myChart.setOption({
          series: {
            id: "pie",
            label: {
              formatter: "{b}: {@[" + dimension + "]} ({d}%)",
            },
            encode: {
              value: dimension,
              tooltip: dimension,
            },
          },
        });
      }
    });
    myChart.setOption(option);
  });

  window.addEventListener("resize", () => {
    myChart.resize();
  });
})();
