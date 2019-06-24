<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <video ref="videoPlayer" class="video-js"></video>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import 'videojs-flash';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
  mounted() {
    const options = {
      autoplay: true,
      controls: true,
      sources: [
        {
          src: 'rtmp://202.69.69.180:443/webcast/bshdlive-pc',
          type: 'rtmp/flv',
        },
      ],
      width: '300px',
      height: '200px',
    };
    videojs(
      this.$refs.videoPlayer,
      options,
      function onPlayerReady() {
        console.log('onPlayerReady', this);
      },
    );
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  },
};
</script>
