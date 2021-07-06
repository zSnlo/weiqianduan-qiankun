import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const setRecvMsg = new Vuex.Store({
  state: {
    appStoreRecvMsg:{},   //接收到的消息
  },
  mutations: {
    setAppStoreRecvMsg(state,value){
      state.appStoreRecvMsg = value
    },
  },
  actions: {
  },
  modules: {
  }
})

const STORE = {}

/**
 * @name 启动qiankun应用间通信机制
 * @param {Object} props 官方通信函数
 * @description 注意：主应用是从qiankun中导出的initGlobalState方法，
 * @description 注意：子应用是附加在props上的onGlobalStateChange, setGlobalState方法（只用主应用注册了通信才会有）
 */
const appStore = (initGlobalState, name) => {
  /**
   * @name 初始化数据内容
   */
  const { onGlobalStateChange,setGlobalState  } = initGlobalState({
    msg: '',
    ignore:'',
  });

  /**
   * @name 监听数据变动
   * @param {Function} 监听到数据发生改变后的回调函数
   * @des 将监听到的数据存入vuex
   */
  onGlobalStateChange((value) => { 
    console.log('['+name+'收到消息]',value)
    setRecvMsg.commit('setAppStoreRecvMsg', value.msg)
  });

  STORE.setGlobalState = setGlobalState;
  STORE.name = name

  // /**
  //  * @name 改变数据并向所有应用广播
  //  */
  // setGlobalState({
  //   ignore: 'master',
  //   msg: '来自master动态设定的消息',
  // });

 
}

const setState = (data) => {
  STORE.setGlobalState?.({
    ignore: STORE.name,
    ...data
  })
}

export {
  setState,appStore
}