const app = require("express")();
const bodyParser = require("body-parser");
const main = require("./main/main");
const AV = require("leanengine");
const timeOut = require("connect-timeout");

app.use(timeOut("12s"))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(AV.express());

//http
app.use("/http",main.handleHttp());//注意函数执行,本身挂载的是路由，不执行的就是回调函数

//ws
let server = main.handleWebSocket(app,"/ws");

//未处理的路由
app.use((req,res,next)=>{
    if(!res.headersSent){
        let err = new Error('Url Not Found')
        err.status = 404;
        next(err);
    }
})

//错误处理
app.use(function (err, req, res, next) {
    if (req.timedout && req.headers.upgrade === 'websocket') {
        // 忽略 websocket 的超时
        return;
    }
    let statusCode = err.status || 500;
    if (statusCode === 500) {
        console.error(err.stack || err);
    }
    if (req.timedout) {
        console.error('请求超时: url=%s, timeout=%d, 请确认方法执行耗时很长，或没有正确的 response 回调。', req.originalUrl, err.timeout);
    }
    res.status(statusCode);
    // 默认不输出异常详情
    var error = {};
    if (app.get('env') === 'development') {
        // 如果是开发环境，则将异常堆栈输出到页面，方便开发调试
        error = err;
        console.log(error)
    };
});
module.exports = server;
