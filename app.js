var Bmob = require('utils/bmob.js')


// var BmobSocketIo = require('utils/bmobSocketIo.js').BmobSocketIo;
// const BmobSocketIo = require('utils/tunnel');
Bmob.initialize(
  '5d26b3bf70bce85df93ce0381c0be8a5',
  'e17be54cfdb150d1b4107fbae73d9b36'
)

App({

  onLaunch: function () {

    // 展示本地存储能力

    var logs = wx.getStorageSync('logs') || []

    logs.unshift(Date.now())

    wx.setStorageSync('logs', logs)

  },

  getUserInfo: function (cb) {

    var that = this

    if (this.globalData.userInfo) {

      typeof cb == "function" && cb(this.globalData.userInfo)

    } else {

      //调用登录接口

      wx.login({

        success: function () {

          wx.getUserInfo({

            success: function (res) {

              that.globalData.userInfo = res.userInfo

              typeof cb == "function" && cb(that.globalData.userInfo)

            }

          })

        }

      })

    }

  },

  globalData: {

    userInfo: null

  },

})
