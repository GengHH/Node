import { Context } from "koa"
/*
 * @Author: GengHH
 * @Date: 2023-06-30 15:51:56
 * @LastEditors: GengHH
 * @LastEditTime: 2023-07-05 17:36:33
 * @Description: file content
 * @FilePath: \Node\server\app\controller\LoginController.ts
 */
import AdminService from "../service/AdminService"
import { sign } from "../utils/auth"
import response from "../utils/response"
import UserService from "../service/UserService"
class LoginController {
	async login(ctx: Context) {
		console.log(ctx)
		const body = ctx.request.body as any
		console.log("requestBody", body)
		if (!body) {
			response.error(ctx, "登录异常", {})
			return
		}
		//使用登录人员的信息进行验签
		const user = await UserService.getUserInfo(body.name, body.password)
		if (!user || !Object.keys(user).length) {
			response.error(ctx, "用户名或密码错误", {})
			return
		}
		const token = sign({ ...user })
		response.success(ctx, { token })
	}
}
export default new LoginController()
