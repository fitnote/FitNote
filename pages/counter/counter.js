// pages/counter/counter.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    counter_item: "卧推",
    counter_list: [
      {
        "id": 1,
        "times": 15,
        "heavy": 20
      }, {
        "id": 2,
        "times": 15,
        "heavy": 25
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      counter_item: options.counter_item
    })
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
      url: '../addCounter/addCounter?fit_item=胸'
    })
  },

  goBack: function(event) {
    console.log('back' + event);
    wx.navigateBack({
      delta: 1
    })
  },

  oneMore: function(event) {
    let _this = this;
    
    let counter_num = _this.data.counter_list.length + 1;

    let heavy = _this.data.counter_list[_this.data.counter_list.length - 1].heavy;
    let times = _this.data.counter_list[_this.data.counter_list.length - 1].times;

    console.log(counter_num);
    wx.navigateTo({
      url: '../addCounter/addCounter?counter_num=' + counter_num + '&heavy=' + heavy + '&times=' + times
    })
  },

  finish: function (event) {
    wx.navigateBack({
      delta: 1
    })
  },

  abandon: function (event) {
    wx.navigateBack({
      delta: 1
    })
  }
})