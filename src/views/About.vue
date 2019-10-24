<template>
  <div class="about">
    <div class="rd-word-cloud" ref="wordCloud"></div>
    <button
      v-for="tab in tabs"
      v-bind:key="tab"
      v-bind:class="['tab-button', { active: currentTab === tab }]"
      v-on:click="currentTab = tab"
    >
      {{ tab }}
    </button>
    <!-- <keep-alive>
      <component v-bind:is="currentTabComponent" class="tab"></component>
    </keep-alive> -->
    <tabContent :slotName="currentTab">
      <template #Posts>
        <!-- <tabPosts></tabPosts> -->
        <input type="text" v-model="search">
      </template>
      <template #Archive>
        <tabArchive></tabArchive>
      </template>
    </tabContent>
  </div>
</template>

<script>
import tabContent from "../components/tab-content.vue";
import tabArchive from "../components/tab-archive.vue";
import tabPosts from "../components/tab-posts.vue";

const echarts = require("echarts");
require("echarts-wordcloud");

export default {
  name: "about",
  data() {
    return {
      chart: null,
      option: null,
      currentTab: "Posts",
      tabs: ["Posts", "Archive"],
      search: ''
    };
  },
  components: {
    tabArchive,
    tabPosts,
    tabContent
  },
  computed: {
    currentTabComponent() {
      return `tab${this.currentTab}`;
    }
  },
  mounted() {
    console.log("传到about里params", this.$route.params);

    this.initChart();
    console.log('练习合并多次本地commit--1')
  },
  beforeDestroy() {
    // if (this.player) {
    console.log("about销毁");
    // this.$refs.video.$refs.videoPlayer.dispose();
    // }
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$refs.wordCloud);
      function createRandomItemStyle() {
        return {
          normal: {
            color: `rgb(${[
              Math.round(Math.random() * 160),
              Math.round(Math.random() * 160),
              Math.round(Math.random() * 160)
            ].join(",")})`
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
    }
  }
};
</script>

<style scoped>
.rd-word-cloud {
  width: 600px;
  height: 165px;
}
.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>


