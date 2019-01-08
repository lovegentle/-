// pages/jianding/jianding.js
var Bmob = require('../../utils/bmob.js');
var common = require('../../utils/common.js');
var app = getApp()
var grids = [
  { "name": "鉴定日记", "ico": "edits.png", "url": "../sendSms/sendSms" },
  { "name": "杜兰特", "ico": "kd.jpg", "url": "../picasa/picasa" },
  { "name": "科比", "ico": "kobe.jpg", "url": "../pay/pay" },
  { "name": "詹姆斯", "ico": "james.jpg", "url": "code/code" },
  { "name": "邓肯", "ico": "dk.jpg", "url": "../login/login" },
  { "name": "库里", "ico": "kl.jpg", "url": "../register/register" },

  { "name": "韦德", "ico": "wade.jpg", "url": "../logout/logout" },
  { "name": "伦纳德", "ico": "lnd.jpg", "url": "../message/list/index" },

];

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    grids: grids,
    imgUrls: [
      'https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=c8694c5771ec54e755e1124cd851f035/7a899e510fb30f24abf12d6ac295d143ad4b0374.jpg',
      'https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=920eeef84d4a20a425133495f13bf347/2934349b033b5bb518f2961434d3d539b600bc37.jpg',
      'https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=a766899cf01fbe090853cb460a096756/e850352ac65c10388fee7828b0119313b17e894c.jpg',
      'https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=6f4a830994ef76c6c4dff379fc7f969f/83025aafa40f4bfb717acf7c074f78f0f736186b.jpg',
    ],
    indicatorDots: true,  //是否显示面板指示点
    autoplay: true,      //是否自动切换
    interval: 3000,       //自动切换时间间隔
    duration: 1000,       //滑动动画时长
    inputShowed: false,
    inputVal: ""
 
  },
  onLoad: function () {
    var that = this

  },
  getUserInfo: function (e) {
    var userinfo = e.detail.userInfo;
    // 这里会把头像信息写入到数据库
    var user = new Bmob.User() //实例化对象
    user.getUserInfo(userInfo)
  },
  autuLogin: function () {
    common.showModal("App.js实现小程序访问则将数据写入系统User表，具体代码请查看App.js。")
  },
})