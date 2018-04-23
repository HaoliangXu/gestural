const router = require("./http/router");
const Client = require("./ws/client");
const socketIo = require("socket.io");
const http = require("http");
/**
 * handleHttp 处理http请求过来的路由
 */
function handleHttp(){
   return router;
}
/**
 * handleWebSocket 处理ws请求
 */
function handleWebSocket(app,path){
   let server = http.createServer(app);
   let io = socketIo({server},{path});
   io.on("connect",socket=>{
       const client = new Client(socket);
       client.initConnect();
   })
   return server;
}
module.exports = {handleHttp,handleWebSocket};