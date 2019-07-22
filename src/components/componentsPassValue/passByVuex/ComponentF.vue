<template>
  <div>
    <p>--- ComponentF component ---</p>
    <div>
      ComponentF中接收的vuex --
      <span :style="{ color: 'red' }">{{$store.state.countF}}</span>
    </div>
    <button @click="increaseCount">
      state异步的countF+1
    </button>
    |
    <button>
      直接改变父组件的值
    </button>
    <p>--- ComponentF component end---</p>
  </div>
</template>

<script>
export default {
  name: "ComponentF",
  data() {
    return {
      componentFdata: "我是组件F"
    };
  },
  methods: {
    increaseCount() {
      // this.$store.commit('increaseF')
      // this.$store.commit('increaseF2')
      // this.$store.commit('increaseF3')
      this.$store.dispatch('increaseFAsync').then(() => {
        console.log('2')
      })
    }
  },
  mounted() {}
};
</script>
