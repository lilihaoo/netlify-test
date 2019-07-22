<template>
  <div>
    <p>--- children component ($parent是一个对象）---</p>
    <div>
      children组件$parent获取parent中的data ---
      <span :style="{ color: 'red' }">{{ parentData }}</span>
    </div>
    <p>--- children component end---</p>
  </div>
</template>

<script>
export default {
  name: "PassByChildren",
  data() {
    return {
      childrenData: "children中的data",
      parentData: ""
    };
  },
  mounted() {
    this.parentData = this.$parent.parentData;
    console.log("children中的$parent", this.$parent);
  }
};
</script>

