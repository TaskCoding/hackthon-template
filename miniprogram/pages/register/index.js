let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  formInputChange(e) {
    const { field } = e.currentTarget.dataset
    this.setData({
      [`formData.${field}`]: e.detail.value
    })
  },
  submitForm(e){
    let db = wx.cloud.database();
    db.collection('register').add({
      data: this.data.formData
    }).then(res => {
      app.globalData.register = true;
      wx.setStorage({
        key: 'register',
        data: true,
      })
      wx.showToast({
        title: '报名成功',
        complete: ()=>{
          wx.switchTab({
            url: '/pages/timeline/index',
          })
        }
      })
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})