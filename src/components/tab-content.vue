<template>
  <div>
    <keep-alive include="tab-archive">
      <slot :name="slotName"></slot>
    </keep-alive>
  </div>
</template>

<script>
export default {
  props: ["slotName"],
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>

<style scoped>
.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
