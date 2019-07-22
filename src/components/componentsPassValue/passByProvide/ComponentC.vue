<template>
  <div>
    <p>--- ComponentC component ---</p>
    <div>
      componentC中接收的Parent的provide --
      <span :style="{ color: 'green' }">{{
        parentProvideData.parentData
      }}</span>
    </div>
    <p>--- ComponentC component end---</p>
    <hr />
    <ComponentD></ComponentD>
  </div>
</template>

<script>
import ComponentD from "./ComponentD.vue";

export default {
  name: "ComponentC",
  inject: ["parentProvideData", "anotherData"],
  data() {
    return {
      componentCdata: "我是组件C",
      cpCdata: this.anotherData
    };
  },
  components: {
    ComponentD
  },
  // props: ['boo'],
  mounted() {}
};
</script>
