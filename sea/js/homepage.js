console.log('xx');
var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
var a = window.location.search.substr(1);
console.log(a);