
import './public-path'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.prototype.router = router

import {appStore} from "./appStore";

Vue.config.productionTip = false

// new Vue({
//   router,
//   // store,
//   render: h => h(App),
// }).$mount('#app')

//注册微前端
// import {initGlobalState } from 'qiankun';
// appStore(initGlobalState,'portal')

let instance = null

function render (props = {}) {
  const { container } = props

  
  //接收传递过来的全局数据
  if (props){
    // utils.globalData = props.globalData
    console.log('portal>>>globalData>>>',props)
  }



  instance = new Vue({
    router,
    appStore,
    render: (h) => h(App)
  }).$mount(container ? container.querySelector('#app') : '#app')
}


/**
 * 如果没有使用微前端框架，直接启动
 */
if(!window.__POWERED_BY_QIANKUN__){
  render()
}


/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap () {

}

 
/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount (props) {
  appStore(props,'wiki');
  render(props)
}


/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount () {
  instance.$destroy()
  instance.$el.innerHTML = ''
  instance = null
}

/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
export async function update(props) {
  render(props)
}



