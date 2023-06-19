/*
 * @Author: GengHH
 * @Date: 2023-06-08 14:35:15
 * @LastEditors: GengHH
 * @LastEditTime: 2023-06-19 16:36:03
 * @Description: file content
 * @FilePath: \Node\server\app\router\index.ts
 */
import { Context, Next } from "koa"
import koaRouter from "koa-router"
import IndexController from "../controller/IndexController"
import AdminService from "../service/AdminService"
const router = new koaRouter({ prefix: "/admin" })

const testApi = new Promise((resolve, reject) => {
	setTimeout(() => {
		// resolve([1, 2, 3])
		resolve(AdminService.getAdmin())
	}, 3000)
})

router.get("/", IndexController.index)
router.get("/one", async (ctx: Context, next: Next) => {
	const admin = await testApi
	console.log(admin)
	ctx.body = admin
	next()
})
export default router
