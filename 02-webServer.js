// 使用express创建web服务器
// 1.引入
const express = require('express');
const fs = require('fs');
const path = require('path');
// console.log(express);

// 2.创建express框架的应用程序
var app = express();

// 3.定义匹配的路由，执行对应的回调函数
// 匹配的地址pathname 如果匹配'/',则执行对应的回调函数
app.get('/', function(req,res)  {
  res.setHeader('Content-type','text/html;charset=utf-8');
  // res.end('nyanhana~o( =∩ω∩= )m喵喵喵？'); // 会显示乱码,要加http请求头
  res.send('喵喵喵？'); // res.send是express框架提供的，默认响应字符串会自动设置响应头设置编码为utf-8
})

// 定义get请求，匹配pathname等于/login路由
app.get('/login',function (req,res) {
  res.send('login');
})
// 定义get请求，匹配pathname等于/register路由
// app.get('/register',function (req,res) {
//   res.send('register');
// })
// 定义get请求，匹配index重定向'/'路由
app.get('/index',function (req,res) {
  res.redirect('/');
})
// 定义get请求，匹配pathname的/register路由
app.get('/register',function (req,res) {
  // 使用express的res.sendFile方法，读取内容并响应给客户端浏览器
  res.sendFile(path.join(__dirname,'view','register.html'));
})
// 使用正则来定义路由path部分
app.get(/^\/index\d+$/,(req,res)=>{
  res.send('你tm竟然找到我了');
})
// 4.启动服务
app.listen(3000,function () {
  console.log('请访问:http://127.0.0.1:3000');
  
})
