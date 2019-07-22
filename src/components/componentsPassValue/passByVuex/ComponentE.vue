<template>
  <div>
    <p>--- ComponentE component ---</p>
    <div>
      componentE中接收的vuex --
      <span :style="{ color: 'blue' }">{{$store.state.countE}}</span>
    </div>
    <button @click="increaseCount">state的countE+1</button>
    <button @click="decreaseCount">state的countE-2(传参)</button>
    <p>--- ComponentE component end---</p>
    <hr />
  </div>
</template>

<script>

export default {
  name: "ComponentE",
  data() {
    return {
      componentEdata: "我是组件E"
    };
  },
  methods: {
    increaseCount() {
      this.$store.commit('increaseE')
    },
    decreaseCount() {
      this.$store.commit('decreaseE', 2)
    }
  },
  mounted() {}
};
</script>
