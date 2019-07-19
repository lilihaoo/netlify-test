<template>
  <div>Archive component
    <div>Home组件中引用（用BusEvent接收来自Home的数据）--{{fromBusData}}</div>
    <button @click="passArchiveData">Home组件（BusEvent给其他组件传递值）{{this.homeData}}</button>

  </div>
</template>

<script>
import Bus from '../bus/bus'

export default {
  name: "tab-archive",
  data() {
    return {
      fromBusData: '',
      archiveData: '我是archive的data'
    };
  },
  mounted () {
    Bus.$on('pass-home-data', data => {
      this.fromBusData = data
    })
  },
  methods: {
    passArchiveData() {
      Bus.$emit('pass-archive-data', this.archiveData)
    }
  },
  destroyed() {
    console.log('archive销毁')
  },
};

</script>

<style scoped>

</style>
