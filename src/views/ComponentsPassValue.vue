<template>
  <div class="components-pass-value">
    <div class="components-pass-box">
      <!-- 父子组件传值props / $emit --start -->
      <div class="item">
        <h5>父子组件传值---props / $emit</h5>
        <p>--- Parent component ---</p>
        <div>
          Parent组件：（子组件PassByProps 传给Parent组件）--
          <span :style="{ color: 'blue' }"> {{ passByProps }}</span>
        </div>
        <p>--- Parent component end---</p>
        <hr />
        <PassByProps :msg="msgProps" @pass-data="receiveData" />
      </div>

      <!-- 父子组件传值props / $emit --end -->

      <!-- 父子、兄弟、跨级组件传值$emit / $on --start -->
      <div class="item">
        <h5>父子、兄弟、跨级组件传值$emit / $on</h5>
        <p>--- Parent component ---</p>
        <button @click="passParentData">
          点击父级组件
        </button>
        |
        <button @click="fromBusData = ''">清空ParentData</button>
        <div>
          Parent组件（用BusEvent接收来自其他组件的数据）--
          <span :style="{ color: 'blue' }"> {{ fromBusData }} </span>
        </div>
        <p>--- Parent component end---</p>
        <hr />
        <PassByBus></PassByBus>
      </div>
      <!-- 父子、兄弟、跨级组件传值$emit / $on --end -->

      <!-- 父子、跨级组件传值$attrs / $listeners --start -->
      <div class="item">
        <h5>父子、跨级组件传值$attrs / $listeners</h5>
        <p>--- Parent component---</p>
        <hr />
        <ComponentA
          :boo="componentA.boo"
          :coo="componentA.coo"
          :doo="componentA.doo"
          :eoo="componentA.eoo"
          title="I am title"
          :style="styleComponentA"
          @dataPass="passListeners"
        ></ComponentA>
        <div>观察eoo---{{ fromComponentB }}</div>
      </div>
      <!-- 父子、跨级组件传值$attrs / $listeners --end -->
    </div>
    <div class="components-pass-box">
      <!-- 父子传值$parent / $children & $ref --start -->
      <div class="item">
        <PassByParent></PassByParent>
      </div>
      <!-- 父子传值$parent / $children & $ref --end -->

      <!-- provide / inject --start -->
      <div class="item">
        <h5>provide / inject 传值</h5>
        <p>---Parent component ---</p>
        <div>
          Parent的 data ---
          <span :style="{ color: 'blue' }">{{ changeParentData }}</span>
        </div>
        <button @click="changeData">change父级data</button> |
        <button @click="changeParentData = '初始的parent的data'">
          重置
        </button>
        <hr />
        <ComponentC></ComponentC>
      </div>
      <!-- provide / inject --end -->

      <!-- vuex --start -->
      <div class="item">
        <ComponentE></ComponentE>
        <ComponentF></ComponentF>
      </div>
      <!-- vuex --end -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Bus from "../bus/bus";
import PassByProps from "../components/componentsPassValue/passByProps/PassByProps.vue";
import PassByBus from "../components/componentsPassValue/passByBus/PassByBus.vue";
import ComponentA from "../components/componentsPassValue/passByAttrs/ComponentA.vue";
import PassByParent from "../components/componentsPassValue/passByParent/PassByParent.vue";
import ComponentC from "../components/componentsPassValue/passByProvide/ComponentC.vue";
import ComponentE from "../components/componentsPassValue/passByVuex/ComponentE.vue";
import ComponentF from "../components/componentsPassValue/passByVuex/ComponentF.vue";

export default {
  name: "componentsPassValue",
  components: {
    PassByProps,
    PassByBus,
    ComponentA,
    PassByParent,
    ComponentC,
    ComponentE,
    ComponentF,
  },
  // provide: {   // 自定义的第一种写法 ,不是响应的
  //   parentProvideData: 'this',
  // },
  provide() {
    // 第二种写法，类似data的写法，可以传递父级的实例
    return {
      parentProvideData: this,
      anotherData: 'anotherData'
    };
  },
  data() {
    return {
      msgProps: {
        msg: "我是Parent组件的data"
      },
      passByProps: "",
      parentData: "我是Parent组件的data",
      fromBusData: "",
      componentA: {
        boo: "boo",
        coo: "coo",
        doo: "doo",
        eoo: "eoo"
      },
      styleComponentA: {
        color: "red"
      },
      fromComponentB: "",
      changeParentData: "初始的parent的data"
    };
  },
  methods: {
    receiveData(data) {
      this.passByProps = data;
    },
    passParentData() {
      // 第一个参数自定义
      Bus.$emit("passParentData", this.parentData);
    },
    passListeners(data) {
      this.componentA.eoo = "我变了";
      this.fromComponentB = data;
    },
    changeData() {
      this.changeParentData = "change后的parent的data";
    }
  },
  created() {},
  mounted() {
    console.log("顶级组件中的$children", this.$children);
    Bus.$on("passByBusdata", data => {
      this.fromBusData = data;
    });

    // 打印出通过路由传参的两种方式
    console.log("传到home里params", this.$route.params); // 在router-link中配合name属性使用
    console.log("传到home里query", this.$route.query); // 在router-link中配合path属性使用
  },
  beforeDestroy() {
    // if (this.player) {
    console.log("home销毁");
    // this.$refs.video.$refs.videoPlayer.dispose();
    // }
  }
};
</script>

<style  scoped>
.components-pass-box {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.components-pass-box .item {
  flex: 4;
  height: 480px;
  border: 1px solid #333;
}
</style>

