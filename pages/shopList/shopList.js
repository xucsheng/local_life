// pages/shopList/shopList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page:1,
    pageSize:10,
    total:0,
    shopList:[],
    query:{},
    loadding:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      query:options
    });
    this.getShopList();


  },
  getShopList(cb){
    this.setData({
      loadding:true,
    });
    // 展示loading
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: `https://www.escook.cn/categories/${this.data.query.id}/shops`,
      method:'GET',
      data:{
        _page: this.data.page,
        _limit: this.data.pageSize
      },
      success:(res)=>{
        this.setData({
          shopList:[...this.data.shopList,...res.data],
          total: res.header['X-Total-Count']-0,
        })
      },
      complete:()=>{
        // 关闭微信下拉触底
        wx.hideLoading();
        this.setData({
          loadding:false,
        });
        // 微信关闭下拉刷新
       // wx.stopPullDownRefresh();
        cb && cb();
      }
    })
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    wx.setNavigationBarTitle({
      title: this.data.query.title,
    })
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
    // 重置关键的数据
    this.setData({
      page:1,
      shopList:[],
      total:0,
    });
    // 重新发起请求数据
    this.getShopList(()=>{
      wx.stopPullDownRefresh();
    });

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    if(this.data.loadding){
      return;
    };
    if(this.data.page * this.data.pageSize >= this.data.total){       
      return wx.showToast({
        title: '数据加载完毕！',
        icon:'none'
      })
   }
    this.setData({
      page:this.data.page+1,
    });
    this.getShopList();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})