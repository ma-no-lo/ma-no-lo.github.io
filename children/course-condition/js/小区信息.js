(() => {
  let myChart = echarts.init(document.querySelector("#arightboxbott"));
  let option = {
    tooltip: {
      trigger: "item",
      formatter: "{b}:{c}人",
    },
    legend: {
      top: "5%",
      left: "center",
      textStyle: {
        color: "#fff",
      },
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["30%", "50%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: false,
          position: "right",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 15,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 89, name: "电科" },
          { value: 86, name: "电信" },
          { value: 89, name: "智科" },
          { value: 108, name: "通信" },
          { value: 100, name: "物联网" },
        ],
      },
    ],
  };
  myChart.setOption(option);
  //适配
  window.addEventListener("resize", () => {
    myChart.resize();
  });
})();
