const { name } = require('./package.json')
const Timestamp = new Date().getTime();

module.exports = {

    publicPath: '/'+ name + '/',
    transpileDependencies: ['common'],
 

    //为了让主应用能正确识别微应用暴露出来的一些信息，微应用的打包工具需要增加如下配置
    configureWebpack: {
        output : {
            // 把子应用打包成 umd 库格式
            library: `${name}-[name]`,
            libraryTarget: 'umd',
            jsonpFunction: `webpackJsonp_${name}`,
            filename: `js/[name].${Timestamp}.js`,
            chunkFilename: `js/[name].${Timestamp}.js`            
        },


        //引用CDN
        externals: {
            'vue': 'Vue',
            'vue-router': 'VueRouter',
            'axios': 'axios',
            'vuex':'Vuex',
            'element-ui': 'ElementUI',
          }, 
    },
    



    //本地调试模式下的配置，请注意一定要支持跨域
    devServer: {
        port: 8082,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },
    productionSourceMap: false,

}
