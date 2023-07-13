/*
 * @Author: GengHH
 * @Date: 2023-06-08 14:35:15
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-07-11 16:14:21
 * @Description: file content
 * @FilePath: \Node\server\app\router\index.ts
 */
import { Context, Next } from "koa"
import koaRouter from "koa-router"
import IndexController from "../controller/IndexController"
import LoginController from "../controller/LoginController"
import UploadController from "../controller/UploadController"
import PageController from "../controller/PageController"
import AdminService from "../service/AdminService"
import AuthMiddleware from "../middleware/AuthMiddleware"
const router = new koaRouter({ prefix: "/admin" })

/**
 * 注册
 */
router.post("/register", LoginController.register)
/**
 * 登录
 */
router.post("/login", LoginController.login)
/**
 * 上传文件
 */
router.post("/uploadFile", UploadController.upload)
/**
 * 进行签名token认证的判断
 */
// router.use(AuthMiddleware)

/**
 * 查询一条信息 （两种写法）
 */
router.get("/", IndexController.index)
router.get("/one", async (ctx: Context, next: Next) => {
	const admin = await AdminService.getAdmin()
	console.log(admin)
	ctx.body = admin
	next()
})
/**
 * 查询所有信息
 */
router.get("/all", IndexController.all)
/**
 * 分页查询
 */
router.get("/list", async (ctx: Context, next: Next) => {
	await PageController.queryAdminList(ctx)
	next()
})

export default router
