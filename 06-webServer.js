// 使用express创建web服务器
// 1.引入
var express = require('express');
// 2.创建express框架的应用程序
var app = express();
var fs = require('fs');
var path = require('path');
// 3.定义匹配的路由，执行对应的回调函数
// 定义一个错误中间件
// 错误中间件两个作用：
// - 跳转到404页面
// - 把错误信息写入到日志文件中，供以后排查错误
// - 普通中间件抛出错误
//     next(new Error('错误'));   //或  throw err

app.get('/login',function(req,res,next){
  console.log('111');
  if(!fs.exists(path.join(__dirname,'view/login222.html'))){
    var err = new Error('login.html文件不存在');
    next(err); //执行错误中间件
  }
  console.log('回来');
  console.log(req.code);
  if(!req.code){
    //上面判断为假，说明没有经过错误中间件，则没有code属性,则响应数据
    res.send('login');
  }
})

app.get('/register',function(req,res){
  res.send('register');
})

//定义错误中间件
app.use('/',function(err,req,res,next){
  req.code = 'error'; //给req对象设置一个属性code,代表是从错误中间件过去的
  console.log(222);
  //显示404错误页面
  res.end('40444444'); 
  // return false; //不行 ，还会跑到上面中间件去
})

app.listen(3000,function(){
  console.log('请访问http://127.0.0.1:3000');
})
