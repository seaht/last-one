Page({
  data: {
    show: false//用于显示或隐藏控件
  },
  chanMask: function () {
    var isShow = this.data.show ? false : true;//如果显示就隐藏，隐藏就显示
    console.log('zz')
    this.setData({
      show: isShow
    })
  }
})
