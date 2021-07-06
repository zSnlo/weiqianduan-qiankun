
import promise from 'es6-promise'
promise.polyfill()

import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.prototype.router = router

import {appStore} from "./appStore";
Vue.config.productionTip = false


//注册微前端
import {initGlobalState } from 'qiankun';
appStore(initGlobalState,'main');


//启动qinkun
import {start } from 'qiankun';
start({ singular: false });


//定义一个全局的已加载的微服务的数组，这个值应该是登录之后从服务器获取的有哪些默认的应用
const microApps = [
  {name:'portal',entry:'http://127.0.0.1:8081',props:{routerBase:'http://127.0.0.1:8080/main',globalData:{}}},
  {name:'wiki',entry:'http://127.0.0.1:8082/',props:{routerBase:'http://127.0.0.1:8080/main',globalData:{}}}
];
Vue.prototype.microApps = microApps

// 缓存应用实例
const allreadyLoadedMicroList = new Map([])
Vue.prototype.microAppsLoaded = allreadyLoadedMicroList

new Vue({
  router,
  appStore,
  render: h => h(App),
}).$mount('#app')



