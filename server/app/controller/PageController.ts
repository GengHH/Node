import { Context } from "koa"
import { URLSearchParams } from "url"
import AdminService from "../service/AdminService"
import pageinate from "../utils/pageinate"
import response from "../utils/response"
import validate from "../utils/validate"
import { Rules } from "async-validator"

/*
 * @Author: GengHH
 * @Date: 2023-07-03 17:21:06
 * @LastEditors: GengHH
 * @LastEditTime: 2023-07-06 17:32:01
 * @Description: file content
 * @FilePath: \Node\server\app\controller\PageController.ts
 */
class PageController {
	async queryAdminList(ctx: Context) {
		// const usp = new URLSearchParams(ctx.querystring)
		// console.log("page", usp.get("page"))

		const rules: Rules = {
			page: [{ type: "string", required: true, message: "页数有误" }],
			limit: [{ type: "string", required: true, message: "每页数量有误" }],
		}
		//TODO 类型IUser可以提炼出去，汇总到一起
		const { data, error } = await validate<{
			page: string | number
			limit: string | number
		}>(ctx, rules)
		if (error !== null) {
			return response.error(ctx, error)
		}

		let page = 1,
			limit = 15
		if (data.page !== null && !isNaN(Number(data.page))) {
			page = Number(data.page)
		}
		if (data.limit !== null && !isNaN(Number(data.limit))) {
			limit = Number(data.limit)
		}
		const { rows, count } = await AdminService.queryAdminListByPage(page, limit)
		response.success(ctx, pageinate(rows, page, count, limit))
	}
}
export default new PageController()
