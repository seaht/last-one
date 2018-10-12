console.log('xx');
 // 打开一个 web socket
               var ws = new WebSocket("wss://3n4w.jingzhunfenxiao.com?swoole=dev&mca=sea/index/swl&http_host=dev.fenxiaoxitong.com.cn&userid=863");
                
               ws.onopen = function()
               {
                  // Web Socket 已连接上，使用 send() 方法发送数据
                  ws.send("发送数据");
                  alert("数据发送中...");
               };
               ws.onmessage = function (evt) 
               { 
                  var received_msg = evt.data;
                  console.log(received_msg);
   
               };