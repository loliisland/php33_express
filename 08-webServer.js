// 使用Express.static()托管静态资源文件
// 1.基本使用

// 通过 Express 内置的 express.static 可以方便地托管静态文件，自动响应这些文件的内容，例如image、CSS、JavaScript 文件等。
// 将静态资源文件所在的目录作为参数传递给 express.static 中间件就可以提供静态资源文件的访问了。

// 例如，假设在 public 目录放置了images、CSS 和 JavaScript 文件，你就可以：
//     //当访问静态资源文件的时候，都会去注册好的目录/public中去寻找，找到了并读取静态文件响应给客户端。
//     app.use('/',express.static(__dirname + '/public') ) ; 
    
// 现在，public 目录下面的文件就可以访问了。
//     http://localhost:3000/images/kitten.jpg
//     http://localhost:3000/css/style.css
//     http://localhost:3000/js/app.js

// 注：所有文件的路径都是相对于public目录存放的，因此，访问静态文件的url路径不要出现/public。

// 1. 也可以为 express.static 中间件函数创建的静态资源文件指定虚拟路径前缀（路径并不实际存在于文件系统中） 

//     app.use('/mypublic',express.static(path.join(__dirname,'public')));
//     //如：html中访问图片<img src="/mypublic/images/dagong.jpg" alt="">
//     //这里的/mypublic是中间件虚拟路径,
//     //其中虚拟路径后面是跟着真实路径/images/dagong.jpg，再去拼接所托管的真实资源文件路径
//     //最终会这么拼接： path.join(__dirname,'public'))+/images/dagong.jpg 才会拼接一个完整的路径。

// 那么之前访问的url也要要带着虚拟路径/mypublic：

//     http://localhost:3000/mypublic/images/kitten.jpg
//     http://localhost:3000/mypublic/css/style.css
//     http://localhost:3000/mypublic/js/app.js

// 官网地址：http://expressjs.com/zh-cn/starter/static-files.html 

var express = require('express');
var app = express();

var path = require('path');

//使用express.static托管静态资源,指定静态资源路径即可
app.use('/public',express.static( path.join(__dirname,'public') ));

//创建路由/user
app.get('/user',function(req,res){
  //获取user.html模板内容并响应
  res.sendFile(path.join( __dirname,'views','user.html' ) );
});

//开启服务
app.listen(3000,function(){
  console.log('请访问http://127.0.0.1:3000');
});


