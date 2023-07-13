/*
 * @Author: GengHH
 * @Date: 2023-06-09 15:02:58
 * @LastEditors: GengHH
 * @LastEditTime: 2023-07-05 15:46:25
 * @Description: file content
 * @FilePath: \Node\server\app\service\AdminService.ts
 */
import Admin from "../model/Admin"

class AdminService {
	async getAdmin() {
		const admin = await Admin.findOne()
		// return { ...admin?.dataValues }
		return admin
	}
	getAdminAll() {
		return Admin.findAll()
	}
	queryAdminListByPage(
		page: number = 1,
		limit: number = 15
	): Promise<{ rows: Admin[]; count: number }> {
		return new Promise((reslove, reject) => {
			reslove(
				Admin.findAndCountAll({
					limit,
					offset: (page - 1) * limit,
				})
			)
		})
	}
}

export default new AdminService()
