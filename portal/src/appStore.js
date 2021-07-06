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
const appStore = (props,name) => {
  /**
   * @name 监听应用间通信，并存入store
   */
  props?.onGlobalStateChange?.(
    (value) => {
      console.log(`[${name}收到消息]:`, value)
      setRecvMsg.commit('setAppStoreRecvMsg', value.msg)
    },
    true
  );
  // props?.setGlobalState?.({
  //   ignore: props.name,
  //   msg: `app:来自${props.name}动态设定的消息`,
  // });

  /**
   * @name 将你需要的数据存起来，供下面setState方法使用
   */
  STORE.setGlobalState = props?.setGlobalState;
  STORE.name = name;
};

/**
 * @name 全局setState方法，修改的内容将通知所有微应用
 * @param {Object} data 按照你设定的内容格式数据 
 */
const setState = (data) => {
  // if (!DataType.isObject(data)) {
  //   throw Error('data必须是对象格式');
  // }
  STORE.setGlobalState?.({
    ignore: STORE.name,
    ...data
  })
}

export {
  setState,appStore
}