App({
  config: require('./config.js'),
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    if(wx.cloud){
      wx.cloud.init();
    }
    let register = wx.getStorageSync('register');
    if(register)
      this.globalData.register = true
  },

  globalData:{
    register: false
  }, 

  onError: function (msg) {
    console.error("Err:",msg)
  }
})
