/*
 * @Author: GengHH
 * @Date: 2023-06-08 14:38:22
 * @LastEditors: GengHH
 * @LastEditTime: 2023-07-07 16:10:35
 * @Description: file content
 * @FilePath: \Node\server\app\index.ts
 */
import dotenv from "dotenv"
dotenv.config()
import koa from "koa"
import koaBody from "koa-body"
import koaStatic from "koa-static"
import router from "./router"
import { Server } from "http"
import AccessLogMiddleware from "./middleware/AccessLogMiddleware"
import db from "./db"
import path from "path"
//测试链接数据库
db()
const app = new koa()
app.use(
	koaBody({
		multipart: true,
	})
)
app.use(koaStatic(path.join(__dirname, "..", "statics")))
app.use(AccessLogMiddleware)
app.use(router.routes())
const run = (port: any): Server => {
	return app.listen(port)
}
export default run
