<template>
  <div>
    <p>--- ComponentD component ---</p>
    <div>
      componentD中接收parent的provide --
      <span :style="{ color: 'red' }">{{
        parentProvideData.changeParentData
      }}</span>
    </div>
    <button @click="parentProvideData.changeData">
      调用父级相同的方法改变parent值
    </button>
    |
    <button @click="parentProvideData.changeParentData = 'componentD改变的'">
      直接改变父组件的值
    </button>

    <p>--- ComponentD component end---</p>
  </div>
</template>

<script>
export default {
  name: "ComponentD",
  inject: ["parentProvideData"], // 写法同props
  // inject: ['componentCProvideData'],
  // inject: {
  //   anotherData: {
  //     from: 'anotherData', // 属性是在可用的注入内容中搜索用的 key (字符串或 Symbol)
  //     default: 'ddd'
  //   }
  // },
  data() {
    return {
      componentDdata: "我是组件D"
    };
  },
  mounted() {
    console.log("componentD", this.anotherData);
  }
};
</script>
