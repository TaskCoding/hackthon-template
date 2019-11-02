const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    config:app.config,
    register: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onShow: function (options) {
    if(app.globalData.register){
      this.setData({
        register: true
      })
    }
  },

  goToRegister: function(e){
    wx.navigateTo({
      url:'../register/index'
    });
  },
  goToFaq:function(e){
    wx.navigateTo({
      url: '../faq/faq',
    })
  },
  
  onShareAppMessage: function () {
    return {
      title: this.config.title
    }
  }
})