/*
 * @Author: GengHH
 * @Date: 2023-06-08 14:35:15
 * @LastEditors: GengHH
 * @LastEditTime: 2023-07-03 17:53:13
 * @Description: file content
 * @FilePath: \Node\server\app\router\index.ts
 */
import { Context, Next } from "koa"
import koaRouter from "koa-router"
import IndexController from "../controller/IndexController"
import LoginController from "../controller/LoginController"
import PageController from "../controller/PageController"
import AdminService from "../service/AdminService"
import AuthMiddleware from "../middleware/AuthMiddleware"
const router = new koaRouter({ prefix: "/admin" })

// 只有用promise包裹一层，才不会报错404
const testApi = new Promise((resolve, reject) => {
	setTimeout(() => {
		// resolve([1, 2, 3])
		resolve(AdminService.getAdmin())
	}, 0)
	// resolve(AdminService.getAdmin())
})
router.get("/login", LoginController.login)
// router.use(AuthMiddleware)

router.get("/", IndexController.index)
//success
router.get("/one", async (ctx: Context, next: Next) => {
	const admin = await testApi
	console.log(admin)
	ctx.body = admin
	next()
})
router.get("/all", IndexController.all)
router.get("/list", async (ctx: Context, next: Next) => {
	await PageController.queryAdminList(ctx)

	next()
})

export default router
