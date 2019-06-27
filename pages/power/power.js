// pages/power/power.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fit_item: [{
        "item_name": "胸",
        "item_icon": "https://img.icons8.com/color/100/000000/chest.png"
      },
      {
        "item_name": "腿",
        "item_icon": "https://img.icons8.com/color/100/000000/hamstrings.png"
      },
      {
        "item_name": "手臂",
        "item_icon": "https://img.icons8.com/color/100/000000/biceps.png"
      },
      {
        "item_name": "背",
        "item_icon": "https://img.icons8.com/color/100/000000/back-muscles.png"
      },
      {
        "item_name": "肩",
        "item_icon": "https://img.icons8.com/color/100/000000/shoulders.png"
      },
      {
        "item_name": "腹肌",
        "item_icon": "https://img.icons8.com/color/100/000000/prelum.png"
      }, {
        "item_name": "臀",
        "item_icon": "https://img.icons8.com/color/100/000000/glutes.png"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  goNext: function(event) {
    console.log('go' + event);
    wx.navigateTo({
      url: '../fit/fit?fit_item=胸'
    })
  },

  goBack: function(event) {
    console.log('back' + event);
    wx.navigateBack({
      delta: 1
    })
  },

  goFitItem: function(event) {
    let _this = this;

    let id = event.target.id;

    let fit_item_name = _this.data.fit_item[id].item_name;

    wx.navigateTo({
      url: '../fit/fit?fit_item=' + fit_item_name
    })
  },

  abandon: function (event) {
    wx.reLaunch({
      url: '../index/index'
    })
  },

  test: function (event) {
    console.log(event.target.id);
  }
})