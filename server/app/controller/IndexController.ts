import { Context } from "koa"
import logger from "../logger"
import AdminService from "../service/AdminService"
class IndexController {
	async index(ctx: Context) {
		logger.info("首页默认请求")
		const admin = await AdminService.getAdmin()
		// ctx.body = [1, 2, 3, 4, 5, 6, 7, 8, 9]
		ctx.body = admin
	}
}

export default new IndexController()
