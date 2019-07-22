<template>
  <div>
    <p>---PassByBus component---</p>
    <div>
      （用BusEvent接收来自ComponentsPassValue组件发送的数据）--
      <span :style="{ color: 'red' }"> {{ fromBusData }} </span>
    </div>
    <button @click="passPassByBusData">
      点击子组件PassByBus
    </button>
    |
    <button @click="fromBusData = ''">清空PassByBusData</button>
    <p>---PassByBus component end---</p>
  </div>
</template>

<script>
import Bus from "../../../bus/bus";

export default {
  name: "PassByBus",
  data() {
    return {
      fromBusData: "",
      passByBusData: "我是PassByBus的data"
    };
  },
  mounted() {
    // 监听来自父级组件内发送的事件
    Bus.$on("passParentData", data => {
      this.fromBusData = data;
    });
  },
  methods: {
    passPassByBusData() {
      // 将自身的数据通过bus发送出事件，别的组件就可以监听到
      Bus.$emit("passByBusdata", this.passByBusData);
    }
  },
  destroyed() {
    console.log("archive销毁");
  }
};
</script>

<style scoped>
</style>
