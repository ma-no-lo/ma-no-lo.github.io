//图表(毕业生去向部分)
//就业率分布图
(() => {
  //数据管理(由ajax或者axios来获取)
  const data = [
    ["2000", 50],
    ["2001", 56],
    ["2002", 56.7],
    ["2003", 58],
    ["2004", 67.2],
    ["2005", 68],
    ["2006", 70],
    ["2007", 69.2],
    ["2008", 68.3],
    ["2009", 66.5],
    ["2010", 68.7],
    ["2011", 70.3],
    ["2012", 72.1],
    ["2013", 77.3],
    ["2014", 69.6],
    ["2015", 76.2],
    ["2016", 67.3],
    ["2017", 65.3],
    ["2018", 79.2],
    ["2019", 76.2],
    ["2020", 73.3],
    ["2021", 70.7],
    ["2022", 67.2],
    ["2023", 64.2],
    ["2024", 59.2],
  ];
  //获取年份（横轴）
  const dateList = data.map(function (item) {
    return item[0];
  });
  //获取百分比(纵轴)
  const valueList = data.map(function (item) {
    return item[1];
  });
  let myChart = echarts.init(document.querySelector(".bar .chart"));
  let option = {
    color: "#2f89cf",
    grid: {
      top: "5%",
      left: "2%",
      bottom: "2%",
      containLabel: true,
    },
    tooltip: {
      trigger: "item",
    },
    xAxis: {
      type: "category",
      data: dateList,
      axisLabel: {
        color: "rgba(255,255,255,.6)",
      },
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,.2)",
        },
      },
      axisTick: {
        show: false,
      },
    },
    yAxis: {
      type: "value",
      max: 100,
      axisLabel: {
        formatter: "{value}%",
        color: "rgba(255,255,255,.6)",
      },
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,.2)",
        },
      },
    },
    series: [
      {
        name: "就业率(%)",
        data: valueList,
        type: "line",
        smooth: true,
      },
    ],
  };
  myChart.setOption(option);

  window.addEventListener("resize", () => {
    myChart.resize();
  });
})();
//行业分布图

(() => {
  let myChart = echarts.init(document.querySelector(".line .chart"));
  let flag = true;
  let option_bar = {
    //用于切换
    title: {
      text: "bar",
      show: false,
    },
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
        data: ["旅游", "教育", "电竞", "医疗", "电商", "社交", "金融"],
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
        name: "人数",
        type: "bar",
        barWidth: "35%",
        data: [100, 120, 155, 122, 231, 201, 100],
        itemStyle: {
          barBorderRadius: [5, 5, 0, 0],
        },
      },
    ],
  };
  let option_pie = {
    color: ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"],
    grid: {
      top: "5%",
    },
    legend: {},
    series: [
      {
        name: "Nightingale Chart",
        type: "pie",
        radius: [30, 50],
        center: ["50%", "50%"],
        roseType: "area",
        itemStyle: {
          borderRadius: 8,
        },
        data: [
          { value: 100, name: "旅游" },
          { value: 120, name: "教育" },
          { value: 155, name: "电竞" },
          { value: 122, name: "医疗" },
          { value: 231, name: "电商" },
          { value: 201, name: "社交" },
          { value: 100, name: "金融" },
        ],
      },
    ],
  };
  myChart.setOption(option_bar);
  //切换逻辑,清除原有图表重写图表，不知道为什么不行
  let emptyOption = {
    title: {},
    tooltip: {},
    legend: { data: [] },
    xAxis: {},
    yAxis: {},
    series: [],
  };
  myChart.setOption(emptyOption);
  $("#shift-occupation").click(() => {
    if (flag) {
      myChart.setOption(option_pie);
      flag = false;
    } else {
      myChart.setOption(option_bar);
      flag = true;
    }
  });
  //添加自适应
  window.addEventListener("resize", () => {
    myChart.resize();
  });
})();

//薪酬分布
(() => {
  let myChart = echarts.init(document.querySelector(".pie .chart"));
  var dataList = [
    {
      name: "3000-5000",
      value: 660,
    },
    {
      name: "5000-7000",
      value: 330,
    },
    {
      name: "7000-10000",
      value: 110,
    },
    {
      name: "10000-15000",
      value: 44,
    },
    {
      name: ">15000",
      value: 20,
    },
  ];

  let option = {
    color: ["#6552D5", "#70D9DA", "#54A8BF", "#3180C0", "#3067C0"],
    grid: {
      bottom: 10,
      left: 100,
      right: "10%",
    },
    legend: {
      show: true,
      orient: "vertical",
      top: "75%",
      left: "10%",
      textStyle: {
        color: "#f2f2f2",
        fontSize: 10,
      },
      icon: "roundRect",
      data: dataList,
    },
    series: [
      {
        radius: ["32%", "50%"],
        center: ["50%", "35%"],
        type: "pie",
        // silent: true,//图形是否不响应和触发鼠标事件，默认为 false，即响应和触发鼠标事件。
        label: {
          fontSize: 12,
          show: true,
          formatter: "{c}人",
          color: "#fff",
          position: "outside",
        },
        emphasis: {
          disabled: true,
        },
        labelLine: {
          show: true,
          length: 20,
          length2: 25,
        },
        name: "",
        data: dataList,
      },
      {
        radius: ["30%", "31%"],
        center: ["50%", "35%"],
        silent: true,
        type: "pie",
        label: { show: false },
        labelLine: { show: false },
        animation: false,
        tooltip: {
          show: false,
        },
        data: [
          {
            value: 1,
            itemStyle: {
              color: "rgba(250,250,250,0.3)",
            },
          },
        ],
      },
      {
        name: "外边框",
        type: "pie",
        clockwise: false, //顺时加载
        // silent: true,
        center: ["50%", "35%"],
        radius: ["53%", "53%"],
        label: { show: false },
        data: [
          {
            value: 9,
            name: "",
            itemStyle: {
              borderWidth: 2,
              borderColor: "#0b5263",
            },
          },
        ],
      },
    ],
  };

  myChart.setOption(option);
})();

//深造
(() => {
  let myChart = echarts.init(document.querySelector(".horizontal-bar .chart"));
  let myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
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
        data: ["美国", "英国", "澳大利亚", "日本", "俄罗斯"],
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
        data: [13, 23, 11, 5, 22],
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

//未就业情况

//地域分布
(function () {
  var myChart = echarts.init(document.querySelector(".map .chart"));
  var geoCoordMap = {
    上海: [121.4648, 31.2891],
    东莞: [113.8953, 22.901],
    东营: [118.7073, 37.5513],
    中山: [113.4229, 22.478],
    临汾: [111.4783, 36.1615],
    临沂: [118.3118, 35.2936],
    丹东: [124.541, 40.4242],
    丽水: [119.5642, 28.1854],
    乌鲁木齐: [87.9236, 43.5883],
    佛山: [112.8955, 23.1097],
    保定: [115.0488, 39.0948],
    兰州: [103.5901, 36.3043],
    包头: [110.3467, 41.4899],
    北京: [116.4551, 40.2539],
    北海: [109.314, 21.6211],
    南京: [118.8062, 31.9208],
    南宁: [108.479, 23.1152],
    南昌: [116.0046, 28.6633],
    南通: [121.1023, 32.1625],
    厦门: [118.1689, 24.6478],
    台州: [121.1353, 28.6688],
    合肥: [117.29, 32.0581],
    呼和浩特: [111.4124, 40.4901],
    咸阳: [108.4131, 34.8706],
    哈尔滨: [127.9688, 45.368],
    唐山: [118.4766, 39.6826],
    嘉兴: [120.9155, 30.6354],
    大同: [113.7854, 39.8035],
    大连: [122.2229, 39.4409],
    天津: [117.4219, 39.4189],
    太原: [112.3352, 37.9413],
    威海: [121.9482, 37.1393],
    宁波: [121.5967, 29.6466],
    宝鸡: [107.1826, 34.3433],
    宿迁: [118.5535, 33.7775],
    常州: [119.4543, 31.5582],
    广州: [113.5107, 23.2196],
    廊坊: [116.521, 39.0509],
    延安: [109.1052, 36.4252],
    张家口: [115.1477, 40.8527],
    徐州: [117.5208, 34.3268],
    德州: [116.6858, 37.2107],
    惠州: [114.6204, 23.1647],
    成都: [103.9526, 30.7617],
    扬州: [119.4653, 32.8162],
    承德: [117.5757, 41.4075],
    拉萨: [91.1865, 30.1465],
    无锡: [120.3442, 31.5527],
    日照: [119.2786, 35.5023],
    昆明: [102.9199, 25.4663],
    杭州: [119.5313, 29.8773],
    枣庄: [117.323, 34.8926],
    柳州: [109.3799, 24.9774],
    株洲: [113.5327, 27.0319],
    武汉: [114.3896, 30.6628],
    汕头: [117.1692, 23.3405],
    江门: [112.6318, 22.1484],
    沈阳: [123.1238, 42.1216],
    沧州: [116.8286, 38.2104],
    河源: [114.917, 23.9722],
    泉州: [118.3228, 25.1147],
    泰安: [117.0264, 36.0516],
    泰州: [120.0586, 32.5525],
    济南: [117.1582, 36.8701],
    济宁: [116.8286, 35.3375],
    海口: [110.3893, 19.8516],
    淄博: [118.0371, 36.6064],
    淮安: [118.927, 33.4039],
    深圳: [114.5435, 22.5439],
    清远: [112.9175, 24.3292],
    温州: [120.498, 27.8119],
    渭南: [109.7864, 35.0299],
    湖州: [119.8608, 30.7782],
    湘潭: [112.5439, 27.7075],
    滨州: [117.8174, 37.4963],
    潍坊: [119.0918, 36.524],
    烟台: [120.7397, 37.5128],
    玉溪: [101.9312, 23.8898],
    珠海: [113.7305, 22.1155],
    盐城: [120.2234, 33.5577],
    盘锦: [121.9482, 41.0449],
    石家庄: [114.4995, 38.1006],
    福州: [119.4543, 25.9222],
    秦皇岛: [119.2126, 40.0232],
    绍兴: [120.564, 29.7565],
    聊城: [115.9167, 36.4032],
    肇庆: [112.1265, 23.5822],
    舟山: [122.2559, 30.2234],
    苏州: [120.6519, 31.3989],
    莱芜: [117.6526, 36.2714],
    菏泽: [115.6201, 35.2057],
    营口: [122.4316, 40.4297],
    葫芦岛: [120.1575, 40.578],
    衡水: [115.8838, 37.7161],
    衢州: [118.6853, 28.8666],
    西宁: [101.4038, 36.8207],
    西安: [109.1162, 34.2004],
    贵阳: [106.6992, 26.7682],
    连云港: [119.1248, 34.552],
    邢台: [114.8071, 37.2821],
    邯郸: [114.4775, 36.535],
    郑州: [113.4668, 34.6234],
    鄂尔多斯: [108.9734, 39.2487],
    重庆: [107.7539, 30.1904],
    金华: [120.0037, 29.1028],
    铜川: [109.0393, 35.1947],
    银川: [106.3586, 38.1775],
    镇江: [119.4763, 31.9702],
    长春: [125.8154, 44.2584],
    长沙: [113.0823, 28.2568],
    长治: [112.8625, 36.4746],
    阳泉: [113.4778, 38.0951],
    青岛: [120.4651, 36.3373],
    韶关: [113.7964, 24.7028],
  };
  var BJData = [
    [{ name: "宝鸡" }, { name: "上海", value: 95 }],
    [{ name: "宝鸡" }, { name: "广州", value: 90 }],
    [{ name: "宝鸡" }, { name: "大连", value: 80 }],
    [{ name: "宝鸡" }, { name: "南宁", value: 70 }],
    [{ name: "宝鸡" }, { name: "南昌", value: 60 }],
    [{ name: "宝鸡" }, { name: "拉萨", value: 50 }],
    [{ name: "宝鸡" }, { name: "长春", value: 40 }],
    [{ name: "宝鸡" }, { name: "包头", value: 30 }],
    [{ name: "宝鸡" }, { name: "重庆", value: 20 }],
    [{ name: "宝鸡" }, { name: "常州", value: 10 }],
  ];

  var planePath =
    "path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z";

  var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
      var dataItem = data[i];
      var fromCoord = geoCoordMap[dataItem[0].name];
      var toCoord = geoCoordMap[dataItem[1].name];
      if (fromCoord && toCoord) {
        res.push([
          {
            coord: fromCoord,
          },
          {
            coord: toCoord,
          },
        ]);
      }
    }
    return res;
  };
  var color = ["#fff"];
  var series = [];
  [["北京", BJData]].forEach(function (item, i) {
    series.push(
      {
        name: item[0] + "",
        type: "lines",
        // zlevel: 1,
        effect: {
          show: true,
          period: 6,
          trailLength: 0.7,
          color: "#fff",
          symbolSize: 3,
        },
        lineStyle: {
          normal: {
            color: color[i],
            width: 0,

            curveness: 0.2,
          },
        },
        data: convertData(item[1]),
      },
      {
        name: item[0],
        type: "lines",
        zlevel: 2,
        effect: {
          show: true,
          period: 6,
          trailLength: 0,
          symbol: planePath,
          symbolSize: 15,
        },
        lineStyle: {
          normal: {
            color: color[i],
            width: 1,
            opacity: 0.4,
            curveness: 0.2,
          },
        },
        data: convertData(item[1]),
      },
      {
        name: item[0],
        type: "effectScatter",
        coordinateSystem: "geo",
        zlevel: 2,
        rippleEffect: {
          brushType: "stroke",
        },
        label: {
          normal: {
            show: true,
            fontSize: 16,
            color: "#fff",
            position: "right",
            formatter: "{b}",
          },
        },
        symbolSize: "10",
        /**symbolSize: function (val) {
            return val[2] / 8;
        },**/
        itemStyle: {
          normal: {
            color: color[i],
          },
        },
        data: item[1].map(function (dataItem) {
          return {
            name: dataItem[1].name,
            value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value]),
          };
        }),
      }
    );
  });
  let option = {
    //  backgroundColor: '#404a59',
    title: {
      text: "地域分布",

      left: "center",
      top: "13%",
      textStyle: {
        color: "#fff",
      },
    },
    geo: {
      map: "china",
      label: {
        emphasis: {
          show: false,
        },
      },
      roam: true,
      itemStyle: {
        normal: {
          areaColor: "#2a91e2",
          borderColor: "#0165b4",
        },
        emphasis: {
          areaColor: "#306de8",
        },
      },
    },
    series: series,
  };
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

//词云图（未就业情况）
(() => {
  let myChart = echarts.init(document.querySelector(".cloud .chart"));
  let option = {
    tooltip: {
      show: true,
    },
    series: [
      {
        name: "热点分析",
        type: "wordCloud",
        // size: ['9%', '99%'],
        sizeRange: [14, 20], //最小文字——最大文字
        // textRotation: [0, 45, 90, -45],
        rotationRange: [0, 0], //旋转角度区间
        // rotationStep: 90,//旋转角度间隔
        shape: "circle",
        gridSize: 30, //字符间距
        textPadding: 0,
        autoSize: {
          enable: true,
          minSize: 6,
        },
        textStyle: {
          normal: {
            color: function () {
              return (
                "rgb(" +
                [
                  Math.round(Math.random() * 105) + 150,
                  Math.round(Math.random() * 105) + 150,
                  Math.round(Math.random() * 105) + 150,
                ].join(",") +
                ")"
              );
            },
            borderColor: "#0ff",
            borderWidth: 1,
            borderRadius: 20,
            padding: [8, 10, 5, 10],
            backgroundColor: "rgba(0,255,255,.2)",
          },
          emphasis: {
            shadowBlur: 10,
            shadowColor: "#333",
          },
        },
        data: [
          {
            name: "市场饱和",
            value: 666,
          },
          {
            name: "考研",
            value: 520,
          },
          {
            name: "继承家产",
            value: "999",
          },
          {
            name: "海投简历中",
            value: "888",
          },
          {
            name: "进一步学习",
            value: "777",
          },
          {
            name: "专业弱",
            value: "688",
          },
          {
            name: "不想工作",
            value: "588",
          },
          {
            name: "寻找机会",
            value: "516",
          },
          {
            name: "迷茫",
            value: "515",
          },
        ],
      },
    ],
  };
  myChart.setOption(option);
})();
