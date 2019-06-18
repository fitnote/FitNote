// pages/addCounter/addCounter.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    counter_num: 3,
    times: 8,
    heavy: 20,
    sub_icon: "https://img.icons8.com/nolan/100/000000/minus-math.png",
    add_icon: "https://img.icons8.com/nolan/100/000000/plus-math.png"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      counter_num: options.counter_num,
      times: options.times,
      heavy: options.heavy
    })
    // console.log(options);
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

  sub_times: function () {
    let _this = this;

    if (!_this.data.times) {
      return;
    }

    let times = _this.data.times - 1;

    _this.setData({
      times: times
    })
  },

  add_times: function () {
    let _this = this;

    // if (!_this.data.times) {
    //   return;
    // }

    let times = _this.data.times + 1;

    _this.setData({
      times: times
    })
  },

  sub_heavy: function () {
    let _this = this;

    if (!_this.data.heavy) {
      return;
    }

    let heavy = _this.data.heavy - 1;

    _this.setData({
      heavy: heavy
    })
  },

  add_heavy: function () {
    let _this = this;

    // if (!_this.data.times) {
    //   return;
    // }

    let heavy = _this.data.heavy + 1;

    _this.setData({
      heavy: heavy
    })
  },

  goNext: function (event) {
    console.log('reLaunch' + event);
    wx.reLaunch({
      url: '../index/index?fit_item=胸'
    })
  },

  goBack: function (event) {
    console.log('back' + event);
    wx.navigateBack({
      delta: 1
    })
  },

  finish: function (event) {
    let _this = this;

    //获取当前页面js里面的pages里的所有信息。
    let pages = getCurrentPages(); 

    //prevPage 是获取上一个页面的js里面的pages的所有信息。 -2 是上一个页面，-3是上上个页面以此类推。
    let prevPage = pages[pages.length - 2];

    let counter_list = prevPage.data.counter_list;

    let new_counter_item = {};
    new_counter_item.id = counter_list.length + 1;
    new_counter_item.times = _this.data.times;
    new_counter_item.heavy = _this.data.heavy;
    
    counter_list.push(new_counter_item);
    
    prevPage.setData({
      counter_list: counter_list
    });

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