/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    countE: 0,
    countF: 0
  },
  mutations: {
    increaseE(state) {
      state.countE++
    },
    decreaseE(state, payLoad) {
      state.countE -= payLoad
    },
    // increaseF(state) { // 有异步操作后，再想按顺序操作就无法控制了 结果是先4后6，想得到的是先3后6
    //   state.countF++
    //   setTimeout(() => {
    //     state.countF+=2
    //   }, 1000)
    //   state.countF+=3
    // }

    increaseF(state) {
      state.countF += 1
      console.log('storeF')
    },
    increaseF2(state) {
      // 有异步操作后，再想按顺序操作就无法控制了
      setTimeout(() => {
        state.countF += 2
        console.log('storeF2')
      }, 1000)
    },
    increaseF3(state) {
      // 有异步操作后，再想按顺序操作就无法控制了
      setTimeout(() => {
        state.countF += 3
        console.log('storeF3')
      }, 1000)
    }
  },
  actions: {
    increaseFAsync(context) {
      return new Promise(resolve => {
        let data = 1
        setTimeout(() => {
          data++
          resolve(console.log('123--', data))
        }, 1000)
        // context.commit('increaseF2')
      }).then(() => {
        console.log('3')
      })
    }
  }
})
