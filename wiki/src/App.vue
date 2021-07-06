<template>
  <div id="app" >  
    <el-button @click="goUrl('/page1')">wiki page1</el-button>
    <el-button @click="goUrl('/page2')">wiki page2</el-button>
    <el-button @click="sendMsg">从wiki发送消息</el-button>
    <router-view />
   
  </div>
</template>

<script>
import {setState} from "./appStore";
export default {
  name: 'App',
  computed: {
  },   
  components:{
    
  },
  data(){
    return{
        
    }
  },
  created () {    
    
  },
  watch:{
     
  },
  mounted:function () {

   
    
  },

  methods:{

    goUrl(url){
      this.router.push({path:url})
      // history.pushState(null, url, url)
    },
    
    
    sendMsg(){
      setState({msg:{result:'来自wiki的消息'}})
    }
     
  },
}
</script>

<style scoped>
</style>
