/*
 * @Author: GengHH
 * @Date: 2023-06-08 14:38:22
 * @LastEditors: GengHH
 * @LastEditTime: 2023-06-30 16:50:11
 * @Description: file content
 * @FilePath: \Node\server\app\index.ts
 */
import dotenv from "dotenv"
dotenv.config()
import koa from "koa"
import router from "./router"
import { Server } from "http"
import AccessLogMiddleware from "./middleware/AccessLogMiddleware"
import db from "./db"
//测试链接数据库
db()
const app = new koa()

app.use(AccessLogMiddleware).use(router.routes())
const run = (port: any): Server => {
	return app.listen(port)
}
export default run
