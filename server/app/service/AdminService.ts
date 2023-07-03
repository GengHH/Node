/*
 * @Author: GengHH
 * @Date: 2023-06-09 15:02:58
 * @LastEditors: GengHH
 * @LastEditTime: 2023-07-03 17:16:16
 * @Description: file content
 * @FilePath: \Node\server\app\service\AdminService.ts
 */
import Admin from "../model/Admin"

class AdminService {
	async getAdmin() {
		const admin = await Admin.findOne()
		return { ...admin?.dataValues }
	}
	getAdminAll() {
		return new Promise((reslove, reject) => {
			setTimeout(async () => {
				reslove(await Admin.findAll())
			}, 0)
		})
	}
	queryAdminListByPage(
		page: number = 1,
		limit: number = 15
	): Promise<{ rows: Admin[]; count: number }> {
		return new Promise((reslove, reject) => {
			setTimeout(async () => {
				reslove(
					await Admin.findAndCountAll({
						limit,
						offset: (page - 1) * limit,
					})
				)
			}, 0)
		})
	}
}

export default new AdminService()
