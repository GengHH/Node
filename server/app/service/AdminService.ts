/*
 * @Author: GengHH
 * @Date: 2023-06-09 15:02:58
 * @LastEditors: GengHH
 * @LastEditTime: 2023-06-30 10:17:10
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
			}, 1000)
		})
	}
}

export default new AdminService()
