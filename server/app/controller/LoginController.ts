import { Context } from "koa"
/*
 * @Author: GengHH
 * @Date: 2023-06-30 15:51:56
 * @LastEditors: GengHH
 * @LastEditTime: 2023-07-03 14:12:29
 * @Description: file content
 * @FilePath: \Node\server\app\controller\LoginController.ts
 */
import AdminService from "../service/AdminService"
import { sign } from "../utils/auth"
import response from "../utils/response"
class LoginController {
	async login(ctx: Context) {
		// TODO 使用登录人员的信息进行验签
		// const user = await AdminService.getAdmin()
		const user = await { name: "ghh" }
		const token = sign(user)
		response.success(ctx, { token })
	}
}
export default new LoginController()
