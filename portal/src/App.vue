<template>
  <div id="app" >  
    <el-button @click="goUrl('/page1')">portal page1</el-button>
    <el-button @click="goUrl('/page2')">portal page2</el-button>
    <el-button @click="sendMsg">从portal发送消息给main</el-button>
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
      setState({msg:{result:'来自portal的消息'}})
    }
     
  },
}
</script>

<style scoped>
</style>
