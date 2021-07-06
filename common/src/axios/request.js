import axios from 'axios'
import Vue from 'vue'
import store from '@/store'

// create an axios instance
const service = axios.create({
    baseURL: '',//process.env.VUE_APP_BASE_API, // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 180000 // request timeout
})

// request interceptor
service.interceptors.request.use(
    config => {
        config.headers['Authorization'] = sessionStorage.getItem('user_token') || ''
        return config
    },
    error => {
        // do something with request error

        return Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(
    /**
     * If you want to get http information such as headers or status
     * Please return  response => response
     */

    /**
     * Determine the request status by custom code
     * Here is just an example
     * You can also judge the status by HTTP Status Code
     */
    response => {
        const res = response.data
            //文件下载
        const headers = response.headers
        if (headers['content-type'] === 'application/octet-stream') {
            return res
        }
        //json报文
        // if the custom code is not 200, it is judged as an error.
        if (res.code !== 200) {
            Vue.prototype.$notify.error({title:'错误',message:res.message || 'Error',duration:0});
            // Vue.prototype.$XModal.message({ message: res.message || 'Error', status: 'error' })

            // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
            if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
                // to re-login
                Vue.prototype.$MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
                    confirmButtonText: 'Re-Login',
                    cancelButtonText: 'Cancel',
                    type: 'warning'
                }).then(() => {
                    store.dispatch('user/resetToken').then(() => {
                        location.reload()
                    })
                })
            }

            // if (res.code == 401){
            //     window.location.href= window.__VUE_APP_HOME
            // }

            return Promise.reject(new Error(res.message || 'Error'))
        } else {
            return res
        }
    },
    error => {
        console.log('err' + error) // for debug
        Vue.prototype.$notify.error({title:'错误',message:error.message || 'Error',duration:0});
        // Vue.prototype.$XModal.message({ message: error.message || 'Error', status: 'error' })
        return Promise.reject(error)
    }
)

export default service