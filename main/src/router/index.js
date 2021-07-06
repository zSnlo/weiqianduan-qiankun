import Vue from 'vue'
import Router from 'vue-router'
import {loadMicroApp} from 'qiankun';
const { name } = require('../../package.json')
Vue.use(Router)


const router = new Router({
    mode: 'history',    //主工程必须是history
    routes: [
        {path:'/'+name+'/porfile/',component:()=>import('../views/porfile.vue')},
        {path:'/'+name+'/sysSetup/',component:()=>import('../views/sysSetup.vue')}
    ]
})




// 当前应用配置
// let current

// 添加路由守卫
router.beforeEach((to, from, next) => {

    let mal = Vue.prototype.microAppsLoaded;

    let token = sessionStorage.getItem('account.token') || '';
    //如果是访问的登录页，则将已加载微应用情况清空绑定的子应用实例
    if (token == ''){
        mal.forEach(app => {
            app.unmount();
        });
        mal.clear();
        // current = null;
        console.log('所有微应用已清空');
        return;
    }

    //是不是微应用？是否已加载微应用
    //注意本地路由的前缀不能和微应用的前缀重复
    console.log(Vue.prototype.microApps)
    const conf = Vue.prototype.microApps.find(item => to.fullPath.indexOf('/'+item.name) !== -1);
    if (conf && to.params.id){

        //查找微应用，是否加载过了
        var mc = mal.get(to.params.id);
        if (mc){
            next();
            return;
        }

        //加载微应用
        // conf.activeRule = '/' + to.params.id;
        let cf = JSON.parse(JSON.stringify(conf));
        cf.entry = cf.entry + to.fullPath;
        cf.name = to.params.id;
        cf.container = '#mainContainer_'+cf.name;
        const micro = loadMicroApp({...cf, router})                
        mal.set(to.params.id, micro)
        // current = conf
        next()        
        
        return;
    }

    next();

    // const conf = Vue.prototype.microApps.find(item => to.params.name == item.name)

    // //是否加载其他的微应用，否则就是本工程内跳转
    // let isapp = to.params.isapp || false;
    // if (isapp == false){
    //     //这里做路由判断，token判断等
    //     next();
    //     return;
    // }

    // //加载微应用
    // console.log('router>>>microApps',Vue.prototype.microApps)
    // const conf = Vue.prototype.microApps.find(item => to.params.name == item.name)
    // // 应用跳转
    // if(conf){
    //     // 未切换子应用
    //     if(current &&  current.name === conf.name ){            
    //         next()
    //         return 
    //     }
        
    //     const cacheMicro = allreadyLoadedMicroList.get(conf.activeRule)
        
    //     // 已缓存应用
    //     if(cacheMicro){
    //         console.log(cacheMicro,'已缓存')
    //         next()
    //         return;
    //     }
    //     // 未缓存应用    
    //     conf.entry = conf.entry + to.fullPath;
    //     const micro = loadMicroApp({...conf, router})                
    //     allreadyLoadedMicroList.set(conf.activeRule, micro)
    //     current = conf
    //     next()
    //     return;
    // }


});

//获取原型对象上的push函数
const originalPush = Router.prototype.push
//修改原型对象中的push方法
Router.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

export default router