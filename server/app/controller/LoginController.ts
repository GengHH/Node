import { Context } from "koa"
/*
 * @Author: GengHH
 * @Date: 2023-06-30 15:51:56
 * @LastEditors: GengHH
 * @LastEditTime: 2023-07-06 16:32:09
 * @Description: file content
 * @FilePath: \Node\server\app\controller\LoginController.ts
 */
import AdminService from "../service/AdminService"
import { sign } from "../utils/auth"
import response from "../utils/response"
import UserService from "../service/UserService"
import { createHash } from "crypto"
import validate from "../utils/validate"
import { Rules } from "async-validator"
class LoginController {
	async login(ctx: Context) {
		//校验登录的数据
		const rules: Rules = {
			name: [{ type: "string", required: true, message: "用户名不能为空" }],
			password: [{ type: "string", required: true, message: "密码不能为空" }],
		}
		//TODO 类型IUser可以提炼出去，汇总到一起
		interface IUser {
			name: string
			password: string
		}
		const { data, error } = await validate<IUser>(ctx, rules)
		if (error !== null) {
			return response.error(ctx, error)
		}
		//使用登录人员的信息进行验签
		const user = (await UserService.getUserInfo(
			data.name,
			data.password
		)) as any
		if (!user || !Object.keys(user).length) {
			response.error(ctx, "用户名或密码错误", {})
			return
		}
		const token = sign({ ...user })
		response.success(ctx, { token })
	}
}
export default new LoginController()
