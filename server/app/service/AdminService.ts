/*
 * @Author: GengHH
 * @Date: 2023-06-09 15:02:58
 * @LastEditors: GengHH
 * @LastEditTime: 2023-06-14 17:49:54
 * @Description: file content
 * @FilePath: \Node\server\app\service\AdminService.ts
 */
import Admin from "../model/Admin"

class AdminService {
	async getAdmin() {
		const admin = await Admin.findOne()
		return { ...admin }
	}
}

export default new AdminService()
