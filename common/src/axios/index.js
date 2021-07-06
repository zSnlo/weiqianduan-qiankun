/**
 * 统一的HTTP请求封装
 * 2020-11-16
 * 
 * 1.直接使用
 * import {axios} from 'common'
 * axios.post  ... axios.get
 * 
 * 2.全局使用 main.js
 * import {axios} from 'common'
 * Vue.use(axios)
 */
import Vue from 'vue'
import axios from 'axios'

const Axios = axios.create({
    timeout: 30000,
    withCredentials:false,
});


/**
 * 请求拦截
 */
Axios.interceptors.request.use(    

    config => {       

      //除了以login结尾之外的所有URL请求都必须拦截是否登录了
      if (!config.url.endsWith('/login')){
        let t = sessionStorage.getItem('user_token') || '';
        if (t != ''){
          config.headers['Authorization'] = t;          
        }
      }

      config.headers['Content-Type'] = 'application/json; charset=utf-8'; 

      return config;
    },
    error => {
      return Promise.reject(error);
    }
)

/**
 * 响应拦截
 */
Axios.interceptors.response.use(

    res => {

        //服务器正确处理了数据，但是缺有错误
        if (res.data && res.data.code && res.data.code != 200){
          Vue.prototype.$message.error(res.data.message);
          return Promise.reject(res.data);
        }

        return res;
    },
    err => {
        return Promise.reject(err);
    }
)

const get = function (url, param = {}) {
    return new Promise((resolve, reject) => {
        Axios.get(url, {
            params: JSON.stringify(param),
          })
          .then(response => {
            resolve(response.data);
          })
          .catch(err => {
            reject(err)
          })
    })     
}

const post = function (url, param = {}) {
    return new Promise((resolve, reject) => {
        Axios.post(url, param)
          .then(response => {
            resolve(response.data);
          })
          .catch(err => {
            reject(err)
          })
    })     
}


export default {
    install: function (Vue) {
      Object.defineProperty(Vue.prototype, "$get", {
        value: get
      });
      Object.defineProperty(Vue.prototype, "$post", {
        value: post
      });
    },
    get,
    post
};
