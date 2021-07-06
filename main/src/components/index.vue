<template>
  <el-container>
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
        style="height:calc(100vh - 200px)"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        
          <!-- 工作台 -->
          <el-menu-item index="portal">
            <i class="iconfont icon-514tongji_yibiaopan" style="font-size:22px;color:#eee;margin-left:-4px;"></i>
            <span slot="title">工作台</span>
          </el-menu-item>      

          <!-- 应用中心 -->
          <el-popover placement="right" width="400" trigger="hover">
            <div class="divAppCenter">
              <div style="font-size:16px;margin-bottom:20px;">产品</div>

              <div style="display:flex;">
                <div class="btn">
                  <div class="img"><img src="@/assets/images/wiki.svg"/></div>
                  <div style="margin-left:10px;">
                    <div>Wiki</div>
                    <div style="margin-top:6px;">企业级知识库</div>
                  </div>
                </div>

                <div class="btn">
                  <div class="img"><img src="@/assets/images/project.svg"/></div>
                  <div style="margin-left:10px;">
                    <div>Project</div>
                    <div style="margin-top:6px;">项目管理</div>
                  </div>
                </div>
              </div>
            </div>
            <el-menu-item index="21" slot="reference">
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

          <!-- <el-submenu index="1q1">
            <template slot="title">
              <i class="iconfont icon-sousuo" style="font-size:20px;color:#eee;margin-left:-4px;"></i>
              <span>搜索</span>
            </template>
            
          </el-submenu>

          <el-submenu index="1q1">
            <template slot="title">
              <i class="iconfont icon-tongzhi" style="font-size:24px;color:#eee;margin-left:-6px;"></i>
              <span>通知</span>
            </template>
            
          </el-submenu> -->

      </el-menu>

           
      <!-- 配置应用中心 -->
      <el-popover placement="right" width="200" trigger="hover">
          <div slot="reference" style="width:60px;height:60px;display:flex;justify-content:center;cursor:pointer">
              <i class="iconfont icon-yingyong" style="font-size:24px;color:#eee;"></i>
          </div>
      </el-popover>
            
      <!-- 个人设置及系统管理 -->
      <el-popover placement="right" width="250" trigger="hover">
        <div class="divProfile">
          <div style="display:flex;margin-bottom:18px;align-items: center;">
            <div class="avatar32">王</div>
            <div style="margin-left:10px;">
              <div>王成</div>
              <div style="margin-top:6px;">18672780402</div>
            </div>
          </div>
           <!-- <div style="height:1px;background:#f0f0f0;margin:4px 0;width:100%"></div> -->
          <div class="btn"><i class="iconfont icon-shezhi"></i> 系统管理</div>
          <div class="btn"><i class="iconfont icon-geren9"></i> 账号设置</div>
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
          <el-tabs v-model="active" type="card" @tab-click="handleClick" class="myTabs" @tab-remove="closeTab">
              <el-tab-pane v-for="item in tabs" :label="item.label" :name="item.id" :key="item.id" :closable="item.closable"></el-tab-pane>
          </el-tabs>
        </el-header>
        <el-main style="padding:10px;">
            <!-- 
                注意这里的DIV，是根据绑定的子工程来创建多个
                因为每个子工程都需要状态保持，所以选择了这种方法
                更多方法：https://juejin.im/post/6856569463950639117#heading-11
              -->
            <div v-for="item in mapp" :id="'mainContainer_'+item.id" :key="item.id" style="width:100%"
                  v-show="activeId == item.id"
                  >
                  <div>
                      loading...{{item.id}}
                  </div>
            </div> 
            
        </el-main>
      </el-container>
    </el-main>
  </el-container>
</template>

<script>
import {utils} from 'common'
export default {
    name:"index_main",
    computed: {
        tabs(){return utils.globalData.navtabs.tabs},
        activeId(){return utils.globalData.navtabs.active}
    },   
    data(){
        return{
            active:'portal',
            mapp:[],
        }
    },

    created () {
      this.mapp = this.tabs;
    },

    methods: {
        doSignout(){
            sessionStorage.setItem('account.token','');
            location.reload();
            // this.router.push('/');
        },


        menuClick(index,indexPath){
          console.log(index,indexPath)
        },


        /**
         * 导航菜单点击事件
        */
        handleClick(tab){
          console.log(tab)
                        
        },  
        
        /**
         * 关闭页签
        */
        closeTab(tab){
          console.log(tab)

        },     
    },
}
</script>

<style>
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

.el-tabs--card>.el-tabs__header .el-tabs__nav{
  border:0px;
}

.el-tabs--card>.el-tabs__header .el-tabs__item.is-active{
  border-bottom:2px solid #348fe4;
  border-left:0px;
}

.el-tabs--card>.el-tabs__header .el-tabs__item{
  border-bottom:2px solid transparent;
  border-left:0px;
}


.myBadge >>> .el-badge__content.is-fixed{
  top:10px;
  font-size:8px;
}
</style>