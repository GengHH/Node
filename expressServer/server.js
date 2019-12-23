const webapck = require('webpack');
const express = require('express');
const app= express();
const bodyParser = require('body-parser');
const webpackMiddleware  = require('webpack-dev-middleware');
let webpackConfig = require('./webpack.config.js');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

var compiler = webpack(webpackConfig);
app.use(webpackMiddleware(compiler,{
    publicPath:webpackConfig.publicPath
}));

//设置该服务器可以被跨域访问
app.all('*', function (req, res, next) {

    res.header('Access-Control-Allow-Origin', '*');
    
    //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
    
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    
    res.header('Access-Control-Allow-Methods', '*');
    
    res.header('Content-Type', 'application/json;charset=utf-8');
    
    next();
    
});

    
app.get('/123', (req, res)=>{
    res.send('Hello world');
});
app.post('/api/login', (req, res)=>{
    console.log(req.body);
    res.send({type:true});
});
app.post('/api/logout', (req, res)=>{
    res.send('logout');
});
app.get('/api/reg', (req, res)=>{
    res.send('reg');
});
app.listen(8083, ()=>{
    console.log('Server is running at http://localhost:8083')
})
