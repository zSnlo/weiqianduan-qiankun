/**
 * 此路径非常重要，否则会出现子工程懒加载出现ChunkLoadError: Loading chunk 0 failed的错误
 * 还有，下面的注释不能删除，否则会报错
 */

import * as config from  '../vue.config'
(function () {
  if (window.__POWERED_BY_QIANKUN__) {    
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line
      __webpack_public_path__ = `//localhost:${config.devServer.port}${config.publicPath}`
      return
    }
    // eslint-disable-next-line
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
  }
})()
