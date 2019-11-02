// pages/notification/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    notifications:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let db = wx.cloud.database();
    db.collection('notifications').orderBy('time','DESC').get().then(res => {
      let new_data = res.data.map(item => {
        item.time = item.time.toString().substr(0,15)
        return item
      });
      this.setData({
        notifications: new_data
      })
    })
  },

  onShareAppMessage: function () {
    return {
      title: "最新公告"
    }
  }
})