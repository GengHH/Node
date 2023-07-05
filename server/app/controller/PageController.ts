import { Context } from "koa"
import { URLSearchParams } from "url"
import AdminService from "../service/AdminService"
import pageinate from "../utils/pageinate"
import response from "../utils/response"

/*
 * @Author: GengHH
 * @Date: 2023-07-03 17:21:06
 * @LastEditors: GengHH
 * @LastEditTime: 2023-07-04 10:42:05
 * @Description: file content
 * @FilePath: \Node\server\app\controller\PageController.ts
 */
class PageController {
	async queryAdminList(ctx: Context) {
		const usp = new URLSearchParams(ctx.querystring)
		console.log("page", usp.get("page"))
		let page = 1,
			limit = 15
		if (usp.get("page") !== null && !isNaN(Number(usp.get("page")))) {
			page = Number(usp.get("page"))
		}
		if (usp.get("limit") !== null && !isNaN(Number(usp.get("limit")))) {
			limit = Number(usp.get("limit"))
		}
		const { rows, count } = await AdminService.queryAdminListByPage(page, limit)
		response.success(ctx, pageinate(rows, page, count, limit))
	}
}
export default new PageController()
