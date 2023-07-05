/*
 * @Author: GengHH
 * @Date: 2023-06-09 15:02:58
 * @LastEditors: GengHH
 * @LastEditTime: 2023-07-05 16:17:53
 * @Description: file content
 * @FilePath: \Node\server\app\service\UserService.ts
 */
import UserInfo from "../model/UserInfo"
import BaseService from "./BaseService"

class UserService extends BaseService {
	/**
	 * 获取登陆人员的信息（根据用户名和密码）
	 * @returns 人员信息
	 */
	async getUserInfo(name: string, password: string) {
		const userInfo = await UserInfo.findOne({
			where: { name: name, password: password },
		})
		// return { ...userInfo?.dataValues }
		return userInfo
	}
}

export default new UserService(UserInfo)
