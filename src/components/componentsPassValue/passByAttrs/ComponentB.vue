<template>
  <div>
    <p>--- ComponentB component ---</p>
    <div>componentB中接收的$attrs -- {{$attrs}}</div>
    <p>--- ComponentB component end---</p>
    <button @click="passComponentBdata">Parent组件中的方法</button>
  </div>
</template>

<script>
export default {
  name: 'componentB',
  inheritAttrs: true,
  props: ['coo'],
  data () {
    return {
      componentBdata: '我是来自componentB的data'
    }
  },
  methods: {
    passComponentBdata() {
      this.$emit('dataPass',this.componentBdata)// 可以直接调用父级或祖籍自定义事件，也可以将孙级的数据传递过去
    }
  }
}
</script>

