// pages/fit/fit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fit_item: "腿",
    icon_1: "https://img.icons8.com/color/100/000000/squats.png",
    icon_2: "https://img.icons8.com/color/100/000000/pullups.png",
    icon_3: "https://img.icons8.com/color/100/000000/bench-over-head.png",
    icon_4: "https://img.icons8.com/color/100/000000/deadlift.png",
    icon_5: "https://img.icons8.com/color/100/000000/bench-press.png",
    counter_item: [{
      "item_name": "Squats",
      "item_icon": "https://img.icons8.com/color/100/000000/squats.png"
    }, {
      "item_name": "Pullups",
      "item_icon": "https://img.icons8.com/color/100/000000/pullups.png"
    }, {
      "item_name": "Bench over head",
      "item_icon": "https://img.icons8.com/color/100/000000/bench-over-head.png"
    }, {
      "item_name": "Deadlift",
      "item_icon": "https://img.icons8.com/color/100/000000/deadlift.png"
    }, {
      "item_name": "Bench press",
      "item_icon": "https://img.icons8.com/color/100/000000/bench-press.png"
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // console.log(options.fit_item);
    this.setData({
      fit_item: options.fit_item
    })
    // data.fit_item=options.fit_item;
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
      url: '../counter/counter?fit_item=胸'
    })
  },

  goBack: function(event) {
    console.log('back' + event);
    wx.navigateBack({
      delta: 1
    })
  },

  goFitItemCounter:function(event) {
    //console.log(event);
    let _this = this;

    let counter_item_name = _this.data.counter_item[event.currentTarget.id].item_name;

    wx.navigateTo({
      url: '../counter/counter?counter_item=' + counter_item_name
    })
  },

  finish: function (event) {
    wx.reLaunch({
      url: '../index/index'
    })
  },

  abandon: function (event) {
    wx.navigateBack({
      delta: 1
    })
  }
})