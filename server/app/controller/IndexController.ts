/*
 * @Author: GengHH
 * @Date: 2023-06-08 14:34:14
 * @LastEditors: GengHH
 * @LastEditTime: 2023-06-14 16:27:57
 * @Description: file content
 * @FilePath: \Node\server\app\controller\indexController.ts
 */
import { Context } from "koa"
import logger from "../logger"
import AdminService from "../service/AdminService"
class IndexController {
	async index(ctx: Context) {
		logger.info("首页默认请求")
		const admin = await AdminService.getAdmin()
		// logger.info(admin)
		console.log(admin)
		console.log("-------------------")
		ctx.body = admin
		// ctx.body = [1, 2, 3, 4, 5, 6, 7, 8, 9]
	}
}

export default new IndexController()
