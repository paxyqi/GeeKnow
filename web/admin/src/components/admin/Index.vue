<template>
  <div>
    <div class="echart" id="mychart" :style="myChartStyle"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      myChart: {},
      pieData: [
        {
          value: 463,
          name: "精确样本分类"
        },
        {
          value: 395,
          name: "作者自带tag"
        },
        {
          value: 157,
          name: "粗略样本分类"
        },
        {
          value: 149,
          name: "标题搜索"
        },
        {
          value: 147,
          name: "全文搜索"
        }
      ],
      pieName: [],
      myChartStyle: { float: "left", width: "100%", height: "600px" } //图表样式
    };
  },
  mounted() {
    this.initDate(); //数据初始化
    this.initEcharts();
  },
  methods: {
    initDate() {
      for (let i = 0; i < this.pieData.length; i++) {
        // this.xData[i] = i;
        // this.yData =this.xData[i]*this.xData[i];
        this.pieName[i] = this.pieData[i].name;
      }
    },
    initEcharts() {
      // 饼图
      const option = {
        legend: {
          // 图例
          data: this.pieName,
          right: "10%",
          top: "40%",
          orient: "vertical"
        },
        title: {
          // 设置饼图标题，位置设为顶部居中
          text: "GeeKnow数据管理平台:用户点击分析图",
          top: "10%",
          left: "center"
        },
        series: [
          {
            type: "pie",
            label: {
              show: true,
              formatter: "{b} : {c} ({d}%)" // b代表名称，c代表对应值，d代表百分比
            },
            radius: "50%", //饼图半径
            data: this.pieData
          }
        ]
      };
      console.log(this.seriesData);
      const optionFree = {
        xAxis: {},
        yAxis: {},
        series: [
          {
            data: this.seriesData,
            type: "line",
            smooth: true
          }
        ]
      };
      this.myChart = echarts.init(document.getElementById("mychart"));
      this.myChart.setOption(option);
      //随着屏幕大小调节图表
      window.addEventListener("resize", () => {
        this.myChart.resize();
      });
    }
  }
};
</script>