import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const router = new Router({
    // mode: 'history',    //主工程必须是history
    routes:[
        {path:'/page1',component:()=>import('../views/page1.vue')},
        {path:'/page2',component:()=>import('../views/page2.vue')}
    ]
})



// 添加路由守卫
router.beforeEach((to, from, next) => {
    next();

});


export default router