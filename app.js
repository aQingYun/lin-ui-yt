//app.js
import config from './config.js'

App({
  onLaunch() {
    // 获取当前小程序运行的环境
    const { platform } = wx.getSystemInfoSync()
    const { dev, product } = config
    const env = platform == 'devtools' ? dev : product
    // 初始化云环境
    wx.cloud.init({
      env
    })
    // 挂在wx.linDb
    wx.linDb = wx.cloud.database({
      env
    })
  }
})