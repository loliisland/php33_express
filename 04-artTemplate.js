const express = require('express');
const app = express();
const path = require('path');
// 1. 项目中安装模板
//        npm install --save art-template
//        npm install --save express-art-template
// 1.引入安装的art—template模版引擎的模块
const artTemplate = require('art-template'); 
const express_template = require('express-art-template');

var moment = require('moment'); // 转换时间戳用到的模块

//定义一个过滤器dateFormat
artTemplate.defaults.imports.dateFormat = function(time,format = 'YYYY-MM-DD HH:mm:ss'){
  return moment.unix(time).format(format);
}

// 2.配置express框架的模版引擎为art-template
// app.set('views', __dirname + '/view/'); //配置模板的路径
app.set('views',path.join(__dirname,'view')); // 设置视图所在的文件夹
app.engine('html',express_template); // 设置模版的后缀为.html(不设这句话，模板文件的后缀默认是.art)
app.set('view engine','html');

app.get('/', (req,res)=>{
  console.log(__dirname); // F:\practice\06-express
  console.log(path.join(__dirname)); // F:\practice\06-express  
  res.send('ss');
})
app.get('/detail', (req,res)=>{
  // 3.输出模版内容res.render('模版文件',分配的变量{},{}是json格式
  res.render('detail.html',{
    "name": "空希",
    age: 14,
    imodo: ['meiluer','kaluoer','mormo'],
    time: 1546499716
  });
})

app.listen(3000, ()=>{
  console.log('请访问:http://127.0.0.1:3000');
})
