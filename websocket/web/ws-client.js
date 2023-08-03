let ws = new WebSocket('ws://localhost:9898');

ws.onopen = function () {
  ws.send('我是初始化2');
};

// onmessage是当服务端给客户端发来消息的时候触发
ws.onmessage=function (res) {
  console.log(res);
  console.log(res.data);
}
