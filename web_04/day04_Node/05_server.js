// 利用node内置http模块 创建一个web服务
// 引入http对象
import http from 'http'
// 创建web服务对象
const server = http.createServer()
// 检测请求事件
server.on('request', (req, res) => {
    // req：请求对象
    // res: 响应对象
    res.statusCode = 200 //设置本次响应状态码
    res.setHeader('Content-Type', 'text/plain;charset=utf-8') // 设置本次响应体内容
    res.end('hello,欢迎访问')// 设置本次响应体
})
// web服务配置端口
server.listen(3000, () => {
    console.log('启动成功');
})