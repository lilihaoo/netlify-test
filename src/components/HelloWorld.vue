<template>
  <div class="hello">
    <video ref="videoPlayer" class="video-js"></video>    
  </div>
</template>

<script>
import videojs from "video.js";
import "video.js/dist/video-js.css";

export default {
  name: "HelloWorld",
  props: {
    msg: Object
  },
  data() {
    return {
      player: null
    }
  },
  computed: {
    getMsg() {
      console.log("111-2", this.msg);
      return Object.assign({ fav: [] }, this.msg);
    }
  },
  mounted() {
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
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
