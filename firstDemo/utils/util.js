var Promise = require('../es6-promise-min').Promise;

const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const getScreenSize = ()=>{
  return new Promise((resolve,reject)=>{
    wx.getSystemInfo({
      success: function (res) {
        var data = {};
        data.width = res.windowWidth;
        //根据安卓或者ios设备类型重新设置屏幕大小
        console.info(res.model.indexOf("iPhone") != -1);
        if (res.model.indexOf("iPhone")!=-1){
          data.height = res.windowHeight-100;
        }else{
          data.height = res.windowHeight
        }
        return resolve(data);
      }
    })
  })
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime,
  getScreenSize: getScreenSize
}
