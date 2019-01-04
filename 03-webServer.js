// 使用express创建web服务器
// 1.引入
var express = require('express');
// 2.创建express框架的应用程序
var app = express();


// 3.定义匹配的路由，执行对应的回调函数
// 定义一个中间件
app.use('/', function(req,res,next)  {
  console.log('先经过我了');
  next(); // 代表执行下一个中间件,需要加next，不然会挂起
})
app.get('/', function(req,res,next)  {
  res.send('阻断了中间件'); // 使用res.send可以阻止中间件的往后执行
})
app.get('/', function(req,res)  {
  console.log('后经过我了');
  res.send('我是index哦');
})

// 抛出错误
app.get('/login', function(req,res)  {
  // 触发错误中间件的两个条件 1. next(err) 2.throw new Error('文件找不到')
  throw new Error('login.html文件找不到了');
  // 上面抛出错误，下面的代码就不会执行了，直接执行定义的错误处理中间件
  res.send('咕咕咕');
})
// 定义一个错误中间件
app.use('/', (err,req,res,next) => {
  console.log(err.message); // 获取到上面跑出来的错误对象的错误信息('login.html文件找不到了')
  res.send('404啦');
})
// 4.启动服务
app.listen(3000,function () {
  console.log('请访问:http://127.0.0.1:3000');
})
