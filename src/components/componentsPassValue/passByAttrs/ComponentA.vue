<template>
  <div>
    <p>--- ComponentA component ---</p>
    <div>componentA中接收的$attrs -- {{ $attrs }}</div>
    <div>componentA中定义的Props--boo: {{boo}}, coo: {{coo}}</div>
    <p>--- ComponentA component end---</p>
    <hr>
    <ComponentB v-bind="$attrs" :cpB="componentBdata" v-on="$listeners"></ComponentB>
  </div>
</template>

<script>
import ComponentB from "./ComponentB.vue";

export default {
  name: "componentA",
  inheritAttrs: false, // 设置false后，父组件的标签上不再继承属性,这样可以有效的避免标签中的属性被html解析带来的默认行为,从而不影响给组件传值
  props: ["boo","coo"], // 过滤掉不想传递给子组件的属性
  data() {
    return {
      componentBdata: "我是组件B"
    };
  },
  components: {
    ComponentB
  },
  // props: ['boo'],
  mounted() {}
};
</script>
