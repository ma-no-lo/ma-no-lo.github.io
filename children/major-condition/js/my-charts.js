(() => {
  let myChart = echarts.init(document.querySelector("#main1"));
  const rawData = [
    [100, 302, 301, 334],
    [320, 132, 101, 134],
    [220, 182, 191, 234],
    [150, 212, 201, 154],
  ];
  const gradeTotals = rawData.map((row) => row.reduce((a, b) => a + b, 0));
  console.log(gradeTotals);
  const totalData = [];
  for (let i = 0; i < rawData[0].length; ++i) {
    let sum = 0;
    for (let j = 0; j < rawData.length; ++j) {
      sum += rawData[j][i];
    }
    totalData.push(sum);
  }
  const grid = {
    left: 10,
    right: 10,
    top: 50,
    bottom: 20,
  };
  const series = ["电科", "智科", "通信", "电信"].map((name, sid) => {
    return {
      name,
      type: "bar",
      stack: "total",
      barWidth: "60%",
      label: {
        show: true,
        formatter: (params) => {
          console.log(params.value);
          return `${Math.round(params.value * 1000) / 10}%`;
        },
      },
      data: rawData.map((row, index) => {
        return row[sid] / gradeTotals[index];
      }),
    };
  });
  option = {
    legend: {
      selectedMode: false,
      textStyle: {
        color: "rgba(255,255,255,.6)",
      },
    },

    grid,
    yAxis: {
      type: "value",
      max: 1,
      show: false,
    },
    xAxis: {
      type: "category",
      axisLabel: {
        color: "rgb(255,255,255)",
      },
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,.6)",
        },
      },
      axisTick: {
        show: false,
      },
      data: ["大一", "大二", "大三", "大四"],
    },
    series,
  };
  myChart.setOption(option);
  window.addEventListener("resize", () => {
    myChart.resize();
  });
})();

(() => {
  let myChart = echarts.init(document.querySelector("#main2"));
  let option = {
    dataset: {
      source: [
        ["absence", "number", "major"],
        [18.2, 111, "智科"],
        [20, 121, "通信"],
        [14, 105, "电科"],
        [12, 99, "电信"],
      ],
    },
    grid: {
      containLabel: true,
      left: 5,
    },
    xAxis: {
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,.6)",
        },
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: true,
      },
    },
    yAxis: {
      type: "category",
      axisLabel: {
        color: "rgb(255,255,255)",
      },
    },
    visualMap: {
      orient: "horizontal",
      left: "center",
      min: 10,
      max: 30,
      text: ["High Absence", "Low Absence"],
      textStyle: {
        color: "rgba(255,255,255,.8)",
      },
      formatter: "{value}%",
      // Map the score column to color
      dimension: 0,
      inRange: {
        color: ["#65B581", "#FFCE34", "#FD665F"],
      },
    },
    series: [
      {
        type: "bar",
        encode: {
          // Map the "amount" column to X axis.
          x: "absence",
          // Map the "product" column to Y axis
          y: "major",
        },
      },
    ],
  };
  myChart.setOption(option);
  window.addEventListener("resize", () => {
    myChart.resize();
  });
})();

(() => {
  let myChart = echarts.init(document.querySelector("#main3"));

  let color = ["#e9df3d", "#f79c19", "#21fcd6", "#08c8ff"];
  let data = [
    {
      name: "智科",
      value: 72,
    },
    {
      name: "电科",
      value: 78,
    },
    {
      name: "通信",
      value: 70,
    },
    {
      name: "电信",
      value: 71,
    },
  ];

  let max = data[0].value;
  data.forEach(function (d) {
    max = d.value > max ? d.value : max;
  });

  let renderData = [
    {
      value: [],
      name: "平均成绩",
      symbol: "none",
      lineStyle: {
        normal: {
          color: "#ecc03e",
          width: 2,
        },
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            1,
            0,
            [
              {
                offset: 0,
                color: "rgba(203, 158, 24, 0.8)",
              },
              {
                offset: 1,
                color: "rgba(190, 96, 20, 0.8)",
              },
            ],
            false
          ),
        },
      },
    },
  ];

  data.forEach(function (d, i) {
    let value = ["", "", "", "", ""];
    (value[i] = max), (renderData[0].value[i] = d.value);
    renderData.push({
      value: value,
      symbol: "circle",
      symbolSize: 12,
      lineStyle: {
        normal: {
          color: "transparent",
        },
      },
      itemStyle: {
        normal: {
          color: color[i],
        },
      },
    });
  });
  let indicator = [];

  data.forEach(function (d) {
    indicator.push({
      name: d.name,
      max: max,
      color: "#fff",
    });
  });
  let option = {
    tooltip: {
      show: true,
      trigger: "item",
    },
    radar: {
      center: ["50%", "50%"], //偏移位置
      radius: "80%",
      startAngle: 40, // 起始角度
      splitNumber: 4,
      shape: "circle",
      splitArea: {
        areaStyle: {
          color: "transparent",
        },
      },
      axisLabel: {
        show: false,
        fontSize: 20,
        color: "#000",
        fontStyle: "normal",
        fontWeight: "normal",
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "rgba(255, 255, 255, 0.5)",
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: "rgba(255, 255, 255, 0.5)",
        },
      },
      indicator: indicator,
    },
    series: [
      {
        type: "radar",
        data: renderData,
      },
    ],
  };
  myChart.setOption(option);
  window.addEventListener("resize", () => {
    myChart.resize();
  });
})();

(() => {
  let myChart = echarts.init(document.querySelector("#main31"));

  let color = ["#e9df3d", "#f79c19", "#21fcd6", "#08c8ff"];
  let data = [
    {
      name: "智科",
      value: 70,
    },
    {
      name: "电科",
      value: 60,
    },
    {
      name: "通信",
      value: 50,
    },
    {
      name: "电信",
      value: 40,
    },
  ];

  let max = data[0].value;
  data.forEach(function (d) {
    max = d.value > max ? d.value : max;
  });

  let renderData = [
    {
      value: [],
      name: "综测",
      symbol: "none",
      lineStyle: {
        normal: {
          color: "#ecc03e",
          width: 2,
        },
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            1,
            0,
            [
              {
                offset: 0,
                color: "rgba(203, 158, 24, 0.8)",
              },
              {
                offset: 1,
                color: "rgba(190, 96, 20, 0.8)",
              },
            ],
            false
          ),
        },
      },
    },
  ];

  data.forEach(function (d, i) {
    let value = ["", "", "", "", ""];
    (value[i] = max), (renderData[0].value[i] = d.value);
    renderData.push({
      value: value,
      symbol: "circle",
      symbolSize: 12,
      lineStyle: {
        normal: {
          color: "transparent",
        },
      },
      itemStyle: {
        normal: {
          color: color[i],
        },
      },
    });
  });
  let indicator = [];

  data.forEach(function (d) {
    indicator.push({
      name: d.name,
      max: max,
      color: "#fff",
    });
  });
  let option = {
    tooltip: {
      show: true,
      trigger: "item",
    },
    radar: {
      center: ["50%", "50%"], //偏移位置
      radius: "80%",
      startAngle: 40, // 起始角度
      splitNumber: 4,
      shape: "circle",
      splitArea: {
        areaStyle: {
          color: "transparent",
        },
      },
      axisLabel: {
        show: false,
        fontSize: 20,
        color: "#000",
        fontStyle: "normal",
        fontWeight: "normal",
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "rgba(255, 255, 255, 0.5)",
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: "rgba(255, 255, 255, 0.5)",
        },
      },
      indicator: indicator,
    },
    series: [
      {
        type: "radar",
        data: renderData,
      },
    ],
  };
  myChart.setOption(option);
  window.addEventListener("resize", () => {
    myChart.resize();
  });
})();

(() => {
  let myChart = echarts.init(document.querySelector("#main9"));
  let option = {
    color: ["#80FFA5", "#00DDFF", "#37A2FF", "#FF0087"],

    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985",
        },
      },
    },
    legend: {
      data: ["智科", "电科", "通信", "电信"],
      textStyle: {
        color: "rgba(255,255,255,1)",
      },
    },

    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: ["2018", "2019", "2020", "2021", "2022", "2023", "2024"],
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: [
      {
        name: "智科",
        type: "line",
        stack: "Total",
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        areaStyle: {
          opacity: 1,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(128, 255, 165)",
            },
            {
              offset: 1,
              color: "rgb(1, 191, 236)",
            },
          ]),
        },
        emphasis: {
          focus: "series",
        },
        data: [140, 232, 101, 264, 90, 340, 250],
      },
      {
        name: "电科",
        type: "line",
        stack: "Total",
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        areaStyle: {
          opacity: 1,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(0, 221, 255)",
            },
            {
              offset: 1,
              color: "rgb(77, 119, 255)",
            },
          ]),
        },
        emphasis: {
          focus: "series",
        },
        data: [120, 282, 111, 234, 220, 340, 310],
      },
      {
        name: "通信",
        type: "line",
        stack: "Total",
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        areaStyle: {
          opacity: 1,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(55, 162, 255)",
            },
            {
              offset: 1,
              color: "rgb(116, 21, 219)",
            },
          ]),
        },
        emphasis: {
          focus: "series",
        },
        data: [320, 132, 201, 334, 190, 130, 220],
      },
      {
        name: "电信",
        type: "line",
        stack: "Total",
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        areaStyle: {
          opacity: 1,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(255, 0, 135)",
            },
            {
              offset: 1,
              color: "rgb(135, 0, 157)",
            },
          ]),
        },
        emphasis: {
          focus: "series",
        },
        data: [220, 402, 231, 134, 190, 230, 120],
      },
    ],
  };
  myChart.setOption(option);
  window.addEventListener("resize", () => {
    myChart.resize();
  });
})();

//专业信息
(() => {
  let myChart = echarts.init(document.querySelector("#main4"));

  let option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
      formatter: "{a0}:{c0}%<br/>{a2}:{c2}%<br/>{a1}:{c1}%",
    },
    legend: {
      data: ["男性比例", "女性比例", "净比例"],
      textStyle: {
        color: "rgb(255,255,255)",
      },
    },
    grid: {
      left: 0,
      right: 10,
      bottom: 0,
      containLabel: true,
    },
    xAxis: [
      {
        type: "value",
        textStyle: {
          color: "rgb(255 ,255,255)",
        },
        axisLine: {
          lineStyle: {
            color: "rgb(255 ,255,255)",
          },
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          formatter: "{value}%",
        },
      },
    ],
    yAxis: [
      {
        type: "category",
        axisTick: {
          show: false,
        },
        data: ["电科", "电信", "通信", "智科"],
        axisLabel: {
          color: "rgba(255,255,255,.8)",
        },
      },
    ],
    series: [
      {
        name: "男性比例",
        type: "bar",

        label: {
          show: true,
          position: "inside",
        },
        emphasis: {
          focus: "series",
        },
        data: [58, 57, 51, 49],
      },
      {
        name: "净比例",
        type: "bar",
        stack: "Total",
        itemStyle: {
          color: "rgb(34, 165, 241)",
        },
        label: {
          show: true,
        },
        emphasis: {
          focus: "series",
        },
        data: [16, 14, 2, -2],
      },
      {
        name: "女性比例",
        type: "bar",
        stack: "Total",
        label: {
          show: true,
          position: "left",
        },
        emphasis: {
          focus: "series",
        },
        data: [-42, -43, -49, -51],
      },
    ],
  };
  myChart.setOption(option);
  window.addEventListener("resize", () => {
    myChart.resize();
  });
})();

//用于切换的图表（非必须）
(() => {
  let myChart = echarts.init(document.querySelector("#main41"));
  myChart.setOption(option);
  window.addEventListener("resize", () => {
    myChart.resize();
  });
})();

//学生增长率
(() => {
  let myChart = echarts.init(document.querySelector("#increment"));
  let option = {
    tooltip: {
      trigger: "axis",
      formatter:
        "{b}<br/>{a0}:{c0}%<br/>{a1}:{c1}%<br/>{a2}:{c2}%<br/>{a3}:{c3}%",
    },
    legend: {
      textStyle: {
        color: "#fff",
      },

      data: ["电科", "电信", "通信", "智科"],
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },

    xAxis: {
      type: "category",
      boundaryGap: false,
      axisLabel: {
        color: "#fff",
      },
      axisLine: {
        lineStyle: {
          color: "#fff",
        },
      },
      data: ["2018", "2019", "2020", "2021", "2022", "2023", "2024"],
    },
    yAxis: {
      type: "value",
      min: 0,
      max: 10,
      axisLine: {
        lineStyle: {
          color: "#fff",
        },
      },
      axisLabel: {
        color: "#fff",

        formatter: "{value}%",
      },
    },
    series: [
      {
        name: "电科",
        type: "line",
        data: [4, 5, 4, 3, 4, 3, 6],
      },
      {
        name: "电信",
        type: "line",

        data: [4, 4, 1, 2, 3, 6, 2],
      },
      {
        name: "通信",
        type: "line",

        data: [5, 1, 3, 2, 7, 5, 3],
      },
      {
        name: "智科",
        type: "line",

        data: [4, 6, 3, 5, 3, 2, 1],
      },
    ],
  };
  myChart.setOption(option);
  window.addEventListener("resize", () => {
    myChart.resize();
  });
})();
