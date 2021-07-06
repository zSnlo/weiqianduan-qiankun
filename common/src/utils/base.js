import Vue from 'vue'
var base = {

    //解析URL的参数
    UrlParamHash(url) {
      var params = [],
        h;
      var hash = url.slice(url.indexOf("?") + 1).split('&');
      for (var i = 0; i < hash.length; i++) {
        h = hash[i].split("="); //
        params[h[0]] = h[1];
      }
      return params;
    },

  /**
   * 根据id递归查找
   * @param {需要查找的数组} arr 
   * @param {上级节点匹配的关键字的名称} findKey
   * @param {上级的ID值} findValue 
   */
  findJsonArray(arr,findKey, findValue, childrenKey='children'){
    
    for (var idx in arr) {
      var item = arr[idx];

      if (item[findKey] == findValue) {
          return item
      } else {
          if (item[childrenKey]){
            var p = this.findJsonArray(item[childrenKey], findKey, findValue, childrenKey);
            if (p) return p;
          }
      }
    }
  },    

  message:{
    error(str){
      Vue.prototype.$XModal.message({ message: str, status: 'error' })
    },
    info(str){
      Vue.prototype.$XModal.message({ message: str, status: 'info' })
    },
    warning(str){
      Vue.prototype.$XModal.message({ message: str, status: 'warning' })
    },
    success(str){
      Vue.prototype.$XModal.message({ message: str, status: 'success' })
    },
    loading(str){
      Vue.prototype.$XModal.message({ message: str, status: 'loading' })
    }
  },

  
    //通过ID获取一个数组中的值
    getValue4Array(arr, id){
      var x = arr.find(item=>item.id == id);
      if (x){return x.value}else{return null;}     
    }, 
    
    //JSONARRAY转JSON对象  [{}...{}]  ->  {key:value,key:value}
    jsonArray2jsonObject(jsonArray){
      var revJson = {};
      for (var i in jsonArray){
        var item = jsonArray[i];
        revJson[item.id] = item.value;
      }
      return revJson;
    },
    
    uuid() {
      var s = [];
      var hexDigits = "0123456789ABCDEF";
      for (var i = 0; i < 36; i++) {
          s[i] = hexDigits.substr(Math.floor(Math.random() * 16), 1)
      }
      s[14] = "4";
      s[19] = hexDigits.substr((s[19] & 3) | 8, 1);
      s[8] = s[13] = s[18] = s[23] = "";
      var uuid = s.join("");
      return uuid
    },  
  
    /**
     * 根据长度获取随机字符串
     * @param {*} len 
     */
    randomString(len) {
      len = len || 32;
      var $chars = 'ABCDEFGHJKMNPQRSTWXYZ2345678abcdefghijklmnopqrstuvwxzy$@$!%*#?&';
      /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
      var maxPos = $chars.length;
      var pwd = '';
      for (var i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
      }
      return pwd
    },  
  
    /**
     * 根据长度随机获取数字
     * @param {*} len 
     */
    randomNumber(len) {
      len = len || 32;
      var $chars = '1234567890';
      /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
      var maxPos = $chars.length;
      var pwd = '';
      for (var i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
      }
      return pwd
    }, 
  
    /**
     * 显示货币千分位
     * @param {*} str 
     */
    toQFW(str){
      var sx = str.replace(/(?=(?!(\b))(\d{3})+$)/g,",");
      return sx;
    },  
    
    newDate(){
      return this.formatDate("yyyy-MM-dd",new Date());
    },
  
    newTime(){
      return this.formatDate("yyyy-MM-dd hh:mm:ss",new Date());
    },
    
    formatDate(fmt,date){
      var o = {
          "M+" : date.getMonth()+1,                 //月份
          "d+" : date.getDate(),                    //日
          "h+" : date.getHours(),                   //小时
          "m+" : date.getMinutes(),                 //分
          "s+" : date.getSeconds(),                 //秒
          "q+" : Math.floor((date.getMonth()+3)/3), //季度
          "S"  : date.getMilliseconds()             //毫秒
      };
      if(/(y+)/.test(fmt)) {
              fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));
      }
      for(var k in o) {
          if(new RegExp("("+ k +")").test(fmt)){
              fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
          }
      }
      return fmt;
    },  
  }
  
  export default base