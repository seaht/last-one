Page({
  data:{
    is_show:false,
    into:''
  },
  //列表点击
  imports:function() {
    var that = this;

    that.setData({
      is_show:true,
      into:'into'
    })
  },
  cancel:function(){
    var that = this;
    console.log('sss')
    that.setData({
      is_show: false,
      into: ''
    })
  },

  onLoad: function () {
    console.log('zz')
  }
})