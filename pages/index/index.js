// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    deviceHeight: 667,
    head: "https://s2.ax1x.com/2019/04/01/Ay1fr4.png",
    icon_1: "https://img.icons8.com/color/100/000000/chest.png",
    icon_2: "https://img.icons8.com/color/100/000000/hamstrings.png",
    icon_3: "https://img.icons8.com/color/100/000000/biceps.png",
    icon_4: "https://img.icons8.com/color/100/000000/back-muscles.png",
    icon_5: "https://img.icons8.com/color/100/000000/shoulders.png",
    icon_6: "https://img.icons8.com/color/100/000000/prelum.png"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  goNext: function(event) {
    console.log(event);
    wx.navigateTo({
      url: '../power/power?fit_item=腿'
    })
  },

  goMe: function (event) {
    wx.reLaunch({
      url: '../me/me'
    })
  }
})