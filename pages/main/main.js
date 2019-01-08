var Bmob = require('../../utils/bmob.js');
var common = require('../../utils/common.js');

var app = getApp()
Page({
  data: {
    userInfo: {
      avatarUrl: "", //用户头像
      nickName: "", //用户名称
    },
  },
  onLoad: function () {
    var that = this;
    wx.getUserInfo({
      success: function (res) {
        console.log(res);
        var avatarUrl = 'userInfo.avatarUrl';
        var nickName = 'userInfo.nickName';
        that.setData({
          [avatarUrl]: res.userInfo.avatarUrl,
          [nickName]: res.userInfo.nickName,
        })
      }
    })

  },

  about: function (e) {
    common.showModal('本程序后端使用Bmob简单实现。');
  }

})