<template>
  <div class="hello">
    <!-- <video ref="videoPlayer" class="video-js"></video> -->
    <div>HelloWorld组件：（父组件Home给子组件props传递的值）--{{ msg }}</div>
    <button @click="passData">点击传值给父组件</button>
    <button @click="deleteData">删除给父组件的值</button>
  </div>
</template>

<script>
// import videojs from "video.js";
// import "video.js/dist/video-js.css";

export default {
  name: "HelloWorld",
  props: {
    msg: Object
  },
  data() {
    return {
      player: null,
      helloWorldData: ""
    };
  },
  computed: {
    getMsg() {
      console.log("111-2", this.msg);
      return Object.assign({ fav: [] }, this.msg);
    }
  },
  methods: {
    passData() {
      this.helloWorldData = "我是passData传递的值";
      this.$emit("pass-data", this.helloWorldData);
    },
    deleteData() {
      this.helloWorldData = "";
      this.$emit("pass-data", this.helloWorldData);
    }
  },
  mounted() {
    // const options = {
    //   autoplay: true,
    //   controls: true,
    //   muted: true,
    //   sources: [
    //     // {
    //     //   src: "rtmp://202.69.69.180:443/webcast/bshdlive-pc",
    //     //   type: "rtmp/flv"
    //     // }
    //     {
    //       src: "https://vjs.zencdn.net/v/oceans.mp4",
    //       type: "video/mp4"
    //     }
    //   ],
    //   width: "600px",
    //   height: "400px"
    // };
    // this.player = videojs(
    //   this.$refs.videoPlayer,
    //   options,
    //   function onPlayerReady() {
    //     console.log("onPlayerReady", this);
    //   }
    // );
  },
  activated() {
    this.player.play();
  },
  deactivated() {
    this.player.pause();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
