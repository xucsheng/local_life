// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 存放轮播图数据的列表数据
    swiperList:[],
    // 存放九宫格数据的列表
    gridList:[],
  
  },
  // 获取轮播图的方法
  getSwiperList(){
    wx.request({
      url: 'https://www.escook.cn/slides',
      method:'GET',
      success:(res)=>{
        this.setData({
          swiperList:res.data,
        })
      }
    })
  },
  //  获取九宫格数据的列表
  getGridList(){
    wx.request({
      url: 'https://www.escook.cn/categories',
      method:'GET',
      success:(res)=>{
        this.setData({
          gridList:res.data,
        })

      }
    })

  },
  // 通过编程式导航跳转到tab
  gotoMessage(){
    wx.switchTab({
      url: '/pages/message/message',
    })
  },
    // 通过编程式导航跳转到非tab
  gotoInfo(){
    wx.navigateTo({
      url: '/pages/info/info',
    })
  },
  gotoInfoParam(){
    wx.navigateTo({
      url: '/pages/info/info?name=zs&gender=男',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getSwiperList();
    this.getGridList();
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
 
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
  }
})