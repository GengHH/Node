require("dotenv").config() //加载env文件中的全局环境变量配置
const express = require("express")
const jwt = require("jsonwebtoken") //生成token
const expressJwt = require("express-jwt") //配置私钥匙
const cors = require("cors") //实现服务器的跨域请求
const bodyParser = require("body-parser") //Express（4.x）的最新版本已经将body parser中间件从核心框架中分离出来了。如果你需要body parser，你应该单独安装一个
const fs = require("fs")
const app = express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//设置该服务器可以被跨域访问
const corsOptions = {
	origin: ["http://localhost:3000"],
	credentials: true,
	methods: "POST, PUT, OPTIONS, DELETE, GET",
	//allowedHeaders: "X-Requested-With, Content-Type, Authorization",  //加上此选项，无法实现跨区请求
}
app.use(cors(corsOptions))
app.options("*", cors(corsOptions))
// app.all('*', function (req, res, next) {

//     res.header('Access-Control-Allow-Origin', '*');

//     //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行

//     res.header('Access-Control-Allow-Headers', 'Content-Type');

//     res.header('Access-Control-Allow-Methods', '*');

//     res.header('Content-Type', 'application/json;charset=utf-8');

//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader("Access-Control-Allow-Credentials", "true");
//     res.setHeader("Access-Control-Allow-Methods", "*");
//     res.setHeader("Access-Control-Allow-Headers", "Content-Type,Access-Token");
//     res.setHeader("Access-Control-Expose-Headers", "*");

//     next();

// });

const auth = expressJwt({ secret: process.env.JWT_SECRET })
app.get("/", (req, res) => {
	res.send("Hello world")
})
//用户登录
app.post("/api/login", (req, res) => {
	// if(err)
	//     console.error(err);
	var user = req.body
	console.log(user)
	var expiry = new Date()
	expiry.setDate(expiry.getDate() + 7)

	//const options = { expiresIn: '2d', issuer: 'anshukumar.me' };
	var token = jwt.sign(
		{
			_id: "123412341",
			username: user.username,
			password: user.password,
			exp: parseInt(expiry.getTime() / 1000),
		},
		process.env.JWT_SECRET
	)
	res.send({
		type: true,
		data: user,
		token: token,
	})
})
//用户退出
app.post("/api/logout", auth, (req, res) => {
	res.send({
		type: "1",
	})
})
app.post("/api/reg", (req, res) => {
	// res.send("reg")
	res.json({ msg: "This is CORS-enabled for a whitelisted domain." })
})

// 获取文件流
app.post("/api/pdf", (req, res) => {
	res.send("reg")
})

//方法一
app.get("/file", (req, res) => {
	// 引入文件
	let fileUrl = "./pdf/test.pdf"
	// 允许跨域
	//res.header("Access-Control-Allow-Origin", "*")

	// 设置请求头
	res.writeHead(200, {
		// 指定文件类型
		// xlsx
		// 'Content-Type':"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
		// docx
		// 'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
		// pdf
		"Content-Type": "application/pdf",
	})
	// 创建可读流
	let readStream = fs.createReadStream(fileUrl)
	// 将读取的结果以管道pipe流的方式返回
	readStream.pipe(res)
})
//方法二
app.get("/file2", (req, res) => {
	// 引入文件
	let fileUrl = "./pdf/test.pdf"
	// 创建可读流
	let readStream = fs.createReadStream(fileUrl)
	// 将读取的结果以管道pipe流的方式返回
	readStream.pipe(res)
})
/**
 * 启动服务
 */
app.listen(9000, () => {
	console.log("Server is running at http://localhost:9000")
})
