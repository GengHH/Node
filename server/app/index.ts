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
