<template>
  <div class="home">
    <!-- 父子组件传值props / $emit --start -->
    <div class="item">
      <h5>父子组件传值props / $emit</h5>
      <HelloWorld ref="video" :msg="obj" @pass-data="receiveData" />
      <div>
        Home组件：（子组件HelloWorld组件传给父组件Home）--{{ helloWorldData }}
      </div>
    </div>

    <!-- 父子组件传值props / $emit --end -->

    <!-- 父子、兄弟、跨级组件传值$emit / $on --start -->
    <div class="item">
      <h5>父子、兄弟、跨级组件传值$emit / $on</h5>
      <button @click="passHomeData">
        Home组件（BusEvent给其他组件传递值）{{ this.homeData }}
      </button>
      <TabArchive></TabArchive>
      <div>
        Home组件中引用（用BusEvent接收来自Home的数据）--{{ fromBusData }}
      </div>
    </div>

    <!-- 父子、兄弟、跨级组件传值$emit / $on --end -->
  </div>
</template>

<script>
// @ is an alias to /src
import Bus from "../bus/bus";
import HelloWorld from "../components/HelloWorld.vue";
import TabArchive from "../components/tab-archive.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    TabArchive
  },
  data() {
    return {
      obj: {
        // name: "a",
        fav: [{ a: "1", b: "2" }, { c: "3", d: "4" }]
        // age: 10
      },
      player: null,
      helloWorldData: "",
      homeData: "我是Home组件的data",
      fromBusData: ""
    };
  },
  methods: {
    receiveData(data) {
      this.helloWorldData = data;
    },
    passHomeData() {
      // 第一个参数自定义
      Bus.$emit("pass-home-data", this.homeData);
    }
  },
  created() {
    console.log("111-1", this.obj);
    // Bus.$emit('pass-home-data', this.homeData)
  },
  mounted() {
    Bus.$on("pass-archive-data", data => {
      this.fromBusData = data;
    });
    console.log("传到home里params", this.$route.params);
    console.log("传到home里query", this.$route.query);
  },
  activated() {
    this.player.play();
  },
  deactivated() {
    this.player.pause();
  },
  beforeDestroy() {
    // if (this.player) {
    console.log("home销毁");
    // this.$refs.video.$refs.videoPlayer.dispose();
    // }
  }
};
</script>

<style scoped>
.home {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.home .item {
  flex: 4;
  height: 300px;
  border: 1px solid #ccc;
}
</style>

