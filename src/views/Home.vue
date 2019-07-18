<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <keep-alive> -->
      <!-- <HelloWorld ref="video" :msg="obj" /> -->
    <!-- </keep-alive> -->
    <video ref="videoPlayer" class="video-js"></video>
  </div>
</template>

<script>
// @ is an alias to /src
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "videojs-flash/dist/videojs-flash";
import SWF_PATH from "videojs-swf/dist/video-js.swf";
// eslint-disable-next-line import/no-unresolved
// import HelloWorld from "../components/HelloWorld";

videojs.options.flash.swf = SWF_PATH;
// vjs.prototype.play = function play() {
//     if (this.ended()) {
//       this.setCurrentTime(0);
//     }
//     this.el_.vjs_load();
//     this.el_.vjs_play();
//   };
// console.log(vjs.prototype)
export default {
  name: "home",
  components: {
    // HelloWorld
  },
  data() {
    return {
      obj: {
        // name: "a",
        fav: [{ a: "1", b: "2" }, { c: "3", d: "4" }]
        // age: 10
      },
      player: null
    };
  },
  created() {
    console.log("111-1", this.obj);
  },
  mounted() {
    console.log('传到home里params', this.$route.params)
    console.log('传到home里query', this.$route.query)
    // eslint-disable-next-line
    // debugger
    const options = {
      autoplay: true,
      controls: true,
      muted: true,
      sources: [
        // {
        //   src: "rtmp://202.69.69.180:443/webcast/bshdlive-pc",
        //   type: "rtmp/flv"
        // }
        {
          src: "https://vjs.zencdn.net/v/oceans.mp4",
          type: "video/mp4"
        }
      ],
      width: "600px",
      height: "400px"
    };
    this.player = videojs(this.$refs.videoPlayer, options, function onPlayerReady() {
      console.log("onPlayerReady", this);
    });
  },
  activated() {
    this.player.play()
  },
  deactivated() {
    this.player.pause()
  },
  beforeDestroy() {
    // if (this.player) {
      console.log('home销毁')
      // this.$refs.video.$refs.videoPlayer.dispose();
    // }
  }
};
</script>
