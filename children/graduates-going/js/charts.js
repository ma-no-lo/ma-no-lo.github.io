//柱状图模块

(function () {
  let myChart = echarts.init(document.querySelector(".bar .chart"));
  let option = {
    color: ["#2f89cf"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      left: "0%",
      top: "10px",
      right: "0%",
      bottom: "4%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: [
          "旅游行业",
          "教育培训",
          "游戏行业",
          "医疗行业",
          "电商行业",
          "社交行业",
          "金融行业",
        ],
        axisTick: {
          alignWithLabel: true,
        },
        axisLabel: {
          color: "rgba(255,255,255,.6)",
          fontSize: "12px",
        },
        axisLine: {
          show: false,
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        axisLabel: {
          color: "rgba(255,255,255,.6)",
          fontSize: "12px",
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)",
          },
        },
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)",
          },
        },
      },
    ],
    series: [
      {
        name: "Direct",
        type: "bar",
        barWidth: "35%",
        data: [200, 300, 300, 900, 1500, 1200, 600],
        itemStyle: {
          barBorderRadius: 5,
        },
      },
    ],
  };
  myChart.setOption(option);

  //添加自适应
  window.addEventListener("resize", () => {
    myChart.resize();
  });
})();

(function () {
  let myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
  let myChart = echarts.init(document.querySelector(".bar2 .chart"));
  let option = {
    grid: {
      top: "10%",
      left: "22%",
      bottom: "10%",
      containLabel: false,
    },
    xAxis: {
      show: false,
    },
    yAxis: [
      {
        inverse: true,
        type: "category",
        data: ["HTML5", "CSS3", "javascript", "VUE", "NODE"],
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: "#fff",
        },
      },
      {
        inverse: true,
        type: "category",
        data: [702, 350, 610, 793, 664],
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: "#fff",
        },
      },
    ],
    series: [
      {
        name: "条",
        type: "bar",
        yAxisIndex: 0,
        itemStyle: {
          barBorderRadius: 20,
          color: (params) => {
            let num = myColor.length;
            return myColor[params.dataIndex % num];
          },
        },
        barCategoryGap: 50,
        barWidth: 15,
        label: {
          show: true,
          position: "inside",
          formatter: "{c}%",
        },
        data: [70, 34, 60, 78, 69],
      },
      {
        name: "框",
        type: "bar",
        yAxisIndex: 1,
        barCategoryGap: 50,
        barWidth: 15,
        itemStyle: {
          color: "none",
          borderColor: "#00c1de",
          borderWidth: 3,
          barBorderRadius: 15,
        },

        data: [100, 100, 100, 100, 100],
      },
    ],
  };

  myChart.setOption(option);

  window.addEventListener("resize", () => {
    myChart.resize();
  });
})();

(function () {
  myChart = echarts.init(document.querySelector(".line .chart"));
  let option = {
    tooltip: {
      trigger: "axis",
    },
    legend: {
      textStyle: {
        color: "#4c9bfd",
      },
      right: "10%",
    },
    grid: {
      top: "20%",
      left: "3%",
      right: "4%",
      bottom: "3%",
      show: true,
      borderColor: "#012f4a",
      containLabel: true,
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },

    xAxis: {
      type: "category",
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: "#4c9bfd",
      },
      axisLine: {
        show: false,
      },
      boundaryGap: false,
      data: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月",
      ],
    },
    yAxis: {
      type: "value",
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: "#4c9bfd",
      },
      axisLine: {
        show: false,
      },
      splitLine: {
        lineStyle: {
          color: "#012f4a",
        },
      },
    },
    color: ["#00f2f1", "#ed3f35"],
    series: [
      {
        name: "新增粉丝",
        type: "line",
        smooth: true,
        data: [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
      },
      {
        name: "新增游客",
        type: "line",
        data: [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
        smooth: true,
      },
    ],
  };

  myChart.setOption(option);

  window.addEventListener("resize", () => {
    myChart.resize();
  });
})();
