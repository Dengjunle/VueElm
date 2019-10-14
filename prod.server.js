var express = require('express');
var config = require('./config/index');

var port = process.env.PORT || config.build.port;

var app = express();

var router = express.Router();

router.get('/', function (req,res,next,) {
    req.url = '/index.html';
    next();
});

app.use(router);
app.use(express.static('./dist'));

// 启动服务器
app.listen(port, () => {
	console.log(`成功监听端口：${port}`);
})
