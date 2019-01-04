// 1.引入所安装的mysql模块
const mysql = require('mysql');

// 2.连接数据库参数配置
var connection = mysql.createConnection({
  host    :"127.0.0.1", //主机
  port    :'3306',	//端口
  user    :"root",	//用户名
  password:"sad315111",	//密码
  database:"shop"		//数据库
});

// 3.连接mysql
connection.connect(function(err){
  // 判断是否连接成功
  if(err){
    throw err;
  }
  console.log('连接mysql成功了！');
});