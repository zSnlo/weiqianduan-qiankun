/**
 * 存储全局参数的，各个应用均可引用使用
 * 2020-11-17
 * 主工程，使用set方法进行提交，并且通过props的globalData参数传递给各子应用
 * 在主工程刷新时，使用init方法从sessionStorage中获取之前的数据
 * 
 * 主要的对象：
 * userinfo{}=用户的属性
 * dict{}=系统字典表
 * navtabs{}=主工程顶部导航
 */
export default {
    page:{
        gHeight:0,          //主页面的高度
        gWidth:0,           //主页面的宽度
    },
    userinfo:{},            //用户的信息
    roleinfo:{},            //权限及菜单
    navmenu:[],             //构造之后的导航菜单
    dict:{},
    navtabs:{
        active:'portal',    //当前激活的
        tabs:[],            //所有之前打开的页签TAB
    },


    set(key,value){
        this[key] = value
        this.store();
    },

    store(){
        sessionStorage.setItem('globalData',JSON.stringify(this))
    },

    init(){
        let s = sessionStorage.getItem('globalData') || '';
        if (s!=''){
            let j = JSON.parse(s);
            for (var key in j){
                this[key] = j[key]
            }
        }
    },

    clear(){
        sessionStorage.setItem('globalData','');        
        this.dict = {};
        this.userinfo = {};
        this.navtabs = {active:'',tabs:[]};
    },
}