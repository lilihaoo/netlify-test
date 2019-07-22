<template>
  <div>
    <h5>父子传值$parent / $children & $ref</h5>
    <p>--- Parent component (是一个数组) ---</p>
    <div>
      Parent组件$children获取到children组件的data --
      <span :style="{ color: 'blue' }">{{ childrenData }}</span>
    </div>
    <div>
      Parent组件$ref获取到children组件的data --
      <span :style="{ color: 'green' }">{{ refChildData }}</span>
    </div>
    <p>--- Parent component end---</p>
    <pass-by-children ref="child" :parentData="parentData"></pass-by-children>
  </div>
</template>

<script>
import PassByChildren from "./PassByChildren.vue";

export default {
  name: "PassByParent",
  components: {
    PassByChildren
  },
  data() {
    return {
      parentData: "parent中的data",
      childrenData: '',
      refChildData: ''
    };
  },
  mounted() {
    this.childrenData = this.$children[0].childrenData;
    this.refChildData = this.$refs.child.childrenData
    console.log("parent组件---", this.$children[0]);
  }
};
</script>

