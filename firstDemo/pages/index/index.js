const util = require('../../utils/util.js')

//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imgSrc:"../../resources/img/test.png"
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onReady: function (e) {
    // 使用 wx.createContext 获取绘图上下文 context
    var context = wx.createCanvasContext('firstCanvas')
    context.setStrokeStyle("#000000")
    context.setLineWidth(2)
    context.moveTo(210, 100)
    context.arc(150, 100, 60, 0, 2 * Math.PI, true)
    context.moveTo(190, 100)
    context.arc(150, 100, 40, 0, Math.PI, false)
    context.moveTo(135, 80)
    context.arc(130, 80, 5, 0, 2 * Math.PI, true)
    context.moveTo(175, 80)
    context.arc(170, 80, 5, 0, 2 * Math.PI, true)
    context.stroke()
    context.draw()
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  openMusic:function(){
    console.log("11111");
    wx.navigateTo({
      url: 'test/test'
    })
  },
  openAlbum:function(){
    wx.navigateTo({
      url: '../album/album',
    })
  }

})
