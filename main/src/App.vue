<template>
  <div id="app" >  
    <index_login v-show="token===''"></index_login>
      <el-container v-if="token!=''">
        <el-aside width="60px" style="overflow:hidden;background:#545c64;height:100vh">

            <!-- logo -->
            <div style="width:60px;height:60px;display:flex;justify-content:center;cursor:pointer;margin-top:10px;">
              <i class="iconfont icon-woniu" style="font-size:36px;color:#d8ffe3;"></i>
            </div>

            <el-menu
            default-active="2"
            :collapse="true"
            class="el-menu-vertical-demo"
            @select="menuClick"
            style="height:calc(100vh - 120px)"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            
              <!-- 工作台 -->
              <el-menu-item index="portal">
                <i class="iconfont icon-514tongji_yibiaopan" style="font-size:22px;color:#eee;margin-left:-4px;"></i>
                <span slot="title">工作台</span>
              </el-menu-item>      

              <!-- 应用中心 -->
              <el-popover ref="popover" placement="right" width="400" trigger="hover">
                <div class="divAppCenter">
                  <div style="font-size:16px;margin-bottom:20px;">产品</div>

                  <div style="display:flex;">
                    <div class="btn" @click="add2Tabs({id:'2CA03FBA702B488EBC9EAC426832D7A1',name:'wiki',label:'Wiki知识库Index',path:'',closable:true,isapp:true},true)">
                      <div class="img"><img src="../public/images/wiki.svg"/></div>
                      <div style="margin-left:10px;">
                        <div>Wiki</div>
                        <div style="margin-top:6px;">企业级知识库</div>
                      </div>
                    </div>

                    <div class="btn" @click="add2Tabs({id:'9C040C2E2EC64D63B1566A0FCC847942',name:'wiki',label:'Wiki知识库Page1',path:'/page1/',closable:true,isapp:true},true)">
                      <div class="img"><img src="../public/images/wiki.svg"/></div>
                      <div style="margin-left:10px;">
                        <div>Wiki</div>
                        <div style="margin-top:6px;">企业级知识库 Page1</div>
                      </div>
                    </div>

                    <div class="btn" @click="add2Tabs({id:'5A2790CB3E1E4E6DA2FB3C49A32A7601',name:'wiki',label:'Wiki知识库Page2',path:'/page2/',closable:true,isapp:true},true)">
                      <div class="img"><img src="../public/images/wiki.svg"/></div>
                      <div style="margin-left:10px;">
                        <div>Wiki</div>
                        <div style="margin-top:6px;">企业级知识库 Page2</div>
                      </div>
                    </div>

                    <div class="btn">
                      <div class="img"><img src="../public/images/project.svg"/></div>
                      <div style="margin-left:10px;">
                        <div>Project</div>
                        <div style="margin-top:6px;">项目管理</div>
                      </div>
                    </div>
                  </div>
                </div>
                <el-menu-item slot="reference">
                  <i class="iconfont icon-yingyong1" style="font-size:20px;color:#eee;margin-left:-2px;"></i>
                </el-menu-item>
              </el-popover>



              <!-- 新建 -->
              <el-popover placement="right" width="200" trigger="hover">
                <div class="divProfile" style="margin:10px;">
                  <div style="font-size:16px;margin-bottom:20px;">新建</div>
                  <div class="btn"><i class="iconfont icon-tushuzhishiku" style="color:rgb(255, 117, 117);"></i> Wiki知识库</div>
                  <div class="btn"><i class="iconfont icon-xuqiu" style="color:#4597d5;"></i> 需求</div>
                  <div class="btn"><i class="iconfont icon-wentifankui" style="color:#5b98db;"></i> 缺陷</div>
                  <div class="btn"><i class="iconfont icon-xiangmu1" style="color:#db755b;"></i> 项目</div>
                  <div class="btn"><i class="iconfont icon-dingdanrizhi-" style="color:#3b6285;"></i> 工作日志（工时）</div>
                  <div class="btn"><i class="iconfont icon-zhoubao" style="color:#fc68e8;"></i> 项目周报（项目经理）</div>
                  <div class="btn"><i class="iconfont icon-xiangmu" style="color:#2c9a26;"></i> 项目会议</div>
                </div>
                <el-menu-item index="21" slot="reference">
                  <i class="iconfont icon-tianjiajiahaowubiankuang" style="font-size:20px;color:#eee;margin-left:-4px;"></i>
                </el-menu-item>
              </el-popover>

              <el-submenu index="1q1">
                <template slot="title">
                  <i class="iconfont icon-sousuo" style="font-size:20px;color:#eee;margin-left:-4px;"></i>
                  <span>搜索</span>
                </template>
                
              </el-submenu>
              <!--
              <el-submenu index="1q1">
                <template slot="title">
                  <i class="iconfont icon-tongzhi" style="font-size:24px;color:#eee;margin-left:-6px;"></i>
                  <span>通知</span>
                </template>
                
              </el-submenu> -->

          </el-menu>

              
          <!-- 配置应用中心 -->
          <!-- <el-popover placement="right" width="200" trigger="hover">
              <div slot="reference" style="width:60px;height:60px;display:flex;justify-content:center;cursor:pointer">
                  <i class="iconfont icon-yingyong" style="font-size:24px;color:#eee;"></i>
              </div>
          </el-popover> -->
                
          <!-- 个人设置及系统管理 -->
          <el-popover ref="popover2" placement="right" width="250" trigger="hover">
            <div class="divProfile">
              <div style="display:flex;margin-bottom:18px;align-items: center;">
                <div class="avatar32">王</div>
                <div style="margin-left:10px;">
                  <div>王成</div>
                  <div style="margin-top:6px;">18672780402</div>
                </div>
              </div>
              <!-- <div style="height:1px;background:#f0f0f0;margin:4px 0;width:100%"></div> -->
              <div class="btn" @click="add2Tabs({id:'sysSetup',name:'sysSetup',path:'/sysSetup/#/',label:'系统设置',closable:true,isapp:false})"><i class="iconfont icon-shezhi"></i> 系统管理</div>
              <div class="btn" @click="add2Tabs({id:'porfile',name:'porfile',path:'/porfile/#/',label:'账号设置',closable:true,isapp:false})"><i class="iconfont icon-geren9"></i> 账号设置</div>
              <div class="btn"><i class="iconfont icon-guanyu"></i> 关于</div>
              <div style="height:1px;background:#f0f0f0;margin:4px 0;width:100%"></div>
              
              <div class="btn" @click="doSignout"><i class="iconfont icon-icon4"></i> 退出登录</div>
            </div>
            <div slot="reference" style="width:60px;height:40px;display:flex;justify-content:center;cursor:pointer">
              <div class="avatar32">王</div>
            </div>
          </el-popover>      


        </el-aside>


        <el-main style="margin:0;padding:0">
          <el-container>
            <el-header style="  height:40px;background:#FFF;padding:0px;">
              <!-- 导航TAB -->
              <el-tabs v-model="activeTabsId_" type="card" @tab-click="tabsClick" class="myTabs" @tab-remove="closeTab">
                  <el-tab-pane v-for="item in tabs" :label="item.label" :name="item.id" :key="item.id" :closable="item.closable"></el-tab-pane>
              </el-tabs>
            </el-header>
            <el-main style="padding:0px;">
                <!-- 
                    注意这里的DIV，是根据绑定的子工程来创建多个
                    因为每个子工程都需要状态保持，所以选择了这种方法
                    更多方法：https://juejin.im/post/6856569463950639117#heading-11
                    此部分不能放在其他的vue中，避免qiankun载入时找不到已创建的dom
                  -->
                  <template v-for="item in tabs_">
                    <template v-if="item.isapp==true">
                      <!-- 微应用加载在DIV容器内 -->
                      <div :id="'mainContainer_'+item.id" :key="item.id" style="width:100%;height:400px"
                            v-show="activeTabsId_ == item.id " :style="{height:(aHeight-40)+'px'}"
                            >
                            <div class="loading" style="text-align:center;margin-top:40px;font-size:18px;width:100%">
                                正在加载...
                            </div>
                      </div>                       
                    </template>
                  </template>
                  <!-- 工程内的跳转 -->
                  <router-view ></router-view>
            </el-main>
          </el-container>
        </el-main>
  </el-container>



   
  </div>
</template>

<script>
// import {setState} from "./appStore";
import {utils} from 'common'
import '../public/global.css'
import '../public/iconfont/iconfont.css'

import index_login from './components/login'
const { name } = require('../package.json')
export default {
  name: 'App',
  components:{
    index_login
  },
  data(){
      return{
          token:'',
          tabs_:[],
          activeTabsId_:'',
          menus:[
            {id:'portal',name:'portal',path:'',label:'工作台',closable:false,isapp:true},
          ],
      }
  },
  computed: {
      tabs(){return utils.globalData.navtabs.tabs},
      activeTabsId(){return utils.globalData.navtabs.active},
      aHeight() {return utils.globalData.page.aHeight},               //整个页面的高度
  },  

  watch:{

    activeTabsId_(n){
      let m = this.tabs_.find(t=>t.id == n)
      if (!m){
        return;
      }
      if (m.isapp == false){
        this.router.push({path:'/'+name+m.path});
      }else{
        let d = {
          id:m.id,
          name:m.name,
          props:{
            routerBase:'http://127.0.0.1:8080/main',
            globalData:utils.globalData
          }
        };
        // 注意这里不能写完整的URL路径，只能写ID，然后再找到路径，空表示加载微应用的首页
        this.router.push({path:'/'+m.name + '/#/' + m.path||'',name:m.id,params:d});
      }
      utils.globalData.navtabs.active = m.id;
      utils.globalData.store();
    }
 
  },
  mounted:function () {
    //初始化全局变量，如果是F5刷新，则从缓存获取
    utils.globalData.init();

    let _this = this;
    _this.resetPage(); 
    window.onresize = () => {
        _this.resetPage();        
    }; 

    this.token = sessionStorage.getItem('account.token') || '';
    this.tabs_ = this.tabs;

    if(this.tabs_.length==0){
      // 如果缓存没有，给个默认的工作台
      //this.add2Tabs({id:'portal',name:'portal',path:'',label:'工作台',closable:false,isapp:true},true);
      //this.activeTabsId_ = 'portal'
    }else{
      // 否则从缓存中加载
      this.activeTabsId_ = this.activeTabsId;
    }
    
    

    
  },

  methods:{

    doSignout(){
        utils.globalData.clear();
        sessionStorage.setItem('account.token','');
        location.href='/'+name
    },

    menuClick(index){
      //从菜单中查找
      let m = this.menus.find(t=>t.id == index)
      if (!m){return;}
      this.add2Tabs(m,true);
    },


    tabsClick(tab){
      this.activeTabsId_ = tab.name;
    },

    /**
     * 增加到导航的tabs中
     */
    add2Tabs(item,isSaved){
      let m = this.tabs_.find(t=>t.id == item.id)
      if (!m){
        console.log('add2Tabs>>>',item)
        this.tabs_.push(item);
      }
      
      this.activeTabsId_ = item.id;
      utils.globalData.navtabs.active = item.id;
      if (isSaved){
        utils.globalData.store();
      }

      if (this.$refs.popover) this.$refs.popover.showPopper = false;
      if (this.$refs.popover2) this.$refs.popover2.showPopper = false;
    },

    closeTab(tab){
      let m = this.tabs_.findIndex(t=>t.id == tab);
      if (m==-1){return}
      
      let item = this.tabs_[m-1];

      //如果是微应用，则需要是否打开了多个微应用的地址，否则就可以直接unmount掉
      let app = this.microAppsLoaded.get(this.tabs_[m].id);
      if (app){
        app.unmount();
        this.microAppsLoaded.delete(this.tabs_[m].id)
      }
      console.log(this.microAppsLoaded)

      this.tabs_.splice(m,1);
      this.add2Tabs(item,true);
    },


    resetPage(){
        utils.globalData.page.gHeight = document.documentElement.clientHeight;
        utils.globalData.page.gWidth = document.documentElement.clientWidth;

        utils.globalData.page.aHeight = document.documentElement.clientHeight - 40;
        utils.globalData.page.aWidth = document.documentElement.clientWidth - (this.isCollapse==false?220:40);
        // setState({msg:{from:'main',to:'',catalog:'globalData',data:utils.globalData}});
    },

     
  },
}
</script>

<style scoped>
.divProfile{
  margin:2px;
}

.divProfile .btn{
  min-height: 26px;
  cursor:pointer;
  padding:6px;
}

.divProfile .btn:hover{
  background-color:#f3f3f3;
}

.divAppCenter{
  margin:10px;
}


.divAppCenter .btn{
  min-height: 26px;
  cursor:pointer;
  padding:6px;
  display:flex;
  margin-bottom:18px;
  align-items: center;
  width:180px;
}

.divAppCenter .btn:hover{
  background-color:#f3f3f3;
}

.divAppCenter .btn .img{
width:48px;height:48px
}


.myTabs{
  width:100%;
}

.myTabs >>> .el-tabs__header .el-tabs__nav{
  border:0px;
}

.myTabs >>>  .el-tabs__header .el-tabs__item.is-active{
  border-bottom:2px solid #348fe4;
  border-left:0px;
  border-right:0px;
}

.myTabs >>>  .el-tabs__header .el-tabs__item{
  border-bottom:2px solid transparent;
  border-left:0px;
  border-right:0px;
}


.myBadge >>> .el-badge__content.is-fixed{
  top:10px;
  font-size:8px;
}
</style>
