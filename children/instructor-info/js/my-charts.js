(() => {
  const myChart = echarts.init(document.querySelector("#comment"));
  let option = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      textStyle: {
        color: "#fff",
      },
    },
    grid: {
      top: 0,
    },
    series: [
      {
        name: "学生评价",
        type: "pie",
        radius: ["20%", "40%"],
        center: ["50%", "70%"],
        // adjust the start and end angle
        startAngle: 180,
        endAngle: 360,
        data: [
          { value: 22, name: "教学质量优秀" },
          { value: 34, name: "为人平和" },
          { value: 18, name: "风趣" },
          { value: 44, name: "专业" },
          { value: 55, name: "效率高" },
        ],
      },
    ],
  };
  myChart.setOption(option);
  window.addEventListener("resize", () => {
    myChart.resize();
  });
})();

(() => {
  let myChart = echarts.init(document.querySelector("#honor"));
  let category = [];
  let dottedBase = +new Date();
  let lineData = [];
  let barData = [];
  for (let i = 0; i < 20; i++) {
    let date = new Date((dottedBase += 3600 * 24 * 1000));
    category.push(
      [date.getFullYear(), date.getMonth() + 1, date.getDate()].join("-")
    );
    let b = Math.random() * 200;
    let d = Math.random() * 200;
    barData.push(b);
    lineData.push(d + b);
  }
  // option
  option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      top: 10,
      left: 5,
      right: 5,
      bottom: 20,
    },
    legend: {
      data: ["line", "bar"],
      textStyle: {
        color: "#ccc",
      },
    },
    xAxis: {
      data: category,
      axisLine: {
        lineStyle: {
          color: "#ccc",
          opacity: 0.5,
        },
      },
      axisTick: {
        show: false,
      },
    },
    yAxis: {
      splitLine: { show: false },
      axisLine: {
        show: false,
        lineStyle: {
          color: "#ccc",
        },
      },
      axisTick: {
        show: false,
      },
    },
    series: [
      {
        name: "line",
        type: "line",
        smooth: true,
        showAllSymbol: true,
        symbol: "emptyCircle",
        symbolSize: 15,
        data: lineData,
      },
      {
        name: "bar",
        type: "bar",
        barWidth: 10,
        itemStyle: {
          borderRadius: 5,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#14c8d4" },
            { offset: 1, color: "#43eec6" },
          ]),
        },
        data: barData,
      },
      {
        name: "line",
        type: "bar",
        barGap: "-100%",
        barWidth: 10,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "rgba(20,200,212,0.5)" },
            { offset: 0.2, color: "rgba(20,200,212,0.2)" },
            { offset: 1, color: "rgba(20,200,212,0)" },
          ]),
        },
        z: -12,
        data: lineData,
      },
      {
        name: "dotted",
        type: "pictorialBar",
        symbol: "rect",
        itemStyle: {
          color: "#0f375f",
        },
        symbolRepeat: true,
        symbolSize: [12, 4],
        symbolMargin: 1,
        z: -10,
        data: lineData,
      },
    ],
  };
  myChart.setOption(option);
  window.addEventListener("resize", () => {
    myChart.resize();
  });
})();

(() => {
  let myChart = echarts.init(document.querySelector("#experience"));
  let option = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      type: "scroll",
      bottom: 10,
      textStyle: {
        color: "#fff",
      },
      data: (function () {
        var list = [];
        for (var i = 1; i <= 28; i++) {
          list.push(i + 2000 + "");
        }
        return list;
      })(),
    },
    visualMap: {
      top: "middle",
      right: 10,
      color: ["green", "yellow"],
      text: [20, 0],
      calculable: true,
      max: 20,
      textStyle: {
        color: "#fff",
      },
    },
    radar: {
      indicator: [
        { text: "SCI", max: 15 },
        { text: "Nature", max: 15 },
        { text: "Cell", max: 15 },
        { text: "The Lancet", max: 15 },
        { text: "Annual Reviews", max: 15 },
      ],
    },
    series: (function () {
      var series = [];
      for (var i = 1; i <= 28; i++) {
        series.push({
          type: "radar",
          symbol: "none",
          lineStyle: {
            width: 1,
          },
          emphasis: {
            areaStyle: {
              color: "rgba(0,250,0,0.3)",
            },
          },
          data: [
            {
              value: [
                (40 - i) / 10,
                ((38 - i) * 1.012) / 10,
                (i * 5 + 10) / 30,
                i * 0.4,
                (i * 4 + 10) / 8,
              ],
              name: i + 2000 + "",
            },
          ],
        });
      }
      return series;
    })(),
  };
  myChart.setOption(option);
  window.addEventListener("resize", () => {
    myChart.resize();
  });
})();
