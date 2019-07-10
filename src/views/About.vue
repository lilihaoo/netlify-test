<template>
  <!-- <div class="about"> -->
    <div class="rd-word-cloud" ref="wordCloud"></div>
  <!-- </div> -->
</template>

<script>
const echarts = require('echarts');
require('echarts-wordcloud');

export default {
  data() {
    return {
      chart: null,
      option: null
    };
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$refs.wordCloud);
      function createRandomItemStyle() {
        return {
          normal: {
            color:
              `rgb(${ 
              [
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160)
              ].join(",") 
              })`
          }
        };
      }
      this.option = {
        title: {
          text: "Google Trends",
          link: "http://www.google.com/trends/hottrends"
        },
        tooltip: {
          show: true
        },
        series: [
          {
            name: "Google Trends",
            type: "wordCloud",
            size: ["80%", "80%"],
            textRotation: [0, 45, 90, -45],
            textPadding: 0,
            autoSize: {
              enable: true,
              minSize: 14
            },
            data: [
              {
                name: "Sam S Club",
                value: 10000,
                itemStyle: {
                  normal: {
                    color: "black"
                  }
                }
              },
              {
                name: "Macys",
                value: 6181,
                itemStyle: createRandomItemStyle()
              },
              {
                name: "Amy Schumer",
                value: 4386,
                itemStyle: createRandomItemStyle()
              },
              {
                name: "Jurassic World",
                value: 4055,
                itemStyle: createRandomItemStyle()
              },
              {
                name: "Charter Communications",
                value: 2467,
                itemStyle: createRandomItemStyle()
              },
              {
                name: "Chick Fil A",
                value: 2244,
                itemStyle: createRandomItemStyle()
              },
              {
                name: "Planet Fitness",
                value: 1898,
                itemStyle: createRandomItemStyle()
              },
              {
                name: "Pitch Perfect",
                value: 1484,
                itemStyle: createRandomItemStyle()
              },
              {
                name: "Express",
                value: 1112,
                itemStyle: createRandomItemStyle()
              },
              {
                name: "Home",
                value: 965,
                itemStyle: createRandomItemStyle()
              },
              {
                name: "Johnny Depp",
                value: 847,
                itemStyle: createRandomItemStyle()
              },
              {
                name: "Lena Dunham",
                value: 582,
                itemStyle: createRandomItemStyle()
              },
              {
                name: "Lewis Hamilton",
                value: 555,
                itemStyle: createRandomItemStyle()
              },
              {
                name: "KXAN",
                value: 550,
                itemStyle: createRandomItemStyle()
              },
              {
                name: "Mary Ellen Mark",
                value: 462,
                itemStyle: createRandomItemStyle()
              },
              {
                name: "Farrah Abraham",
                value: 366,
                itemStyle: createRandomItemStyle()
              },
              {
                name: "Rita Ora",
                value: 360,
                itemStyle: createRandomItemStyle()
              },
              {
                name: "Serena Williams",
                value: 282,
                itemStyle: createRandomItemStyle()
              },
              {
                name: "NCAA baseball tournament",
                value: 273,
                itemStyle: createRandomItemStyle()
              },
              {
                name: "Point Break",
                value: 265,
                itemStyle: createRandomItemStyle()
              }
            ]
          }
        ]
      };
      // 绘制图表
      this.chart.setOption(this.option);
    },
  }
};
</script>

<style>
.rd-word-cloud {
  width: 600px;
  height: 165px;
}
</style>


