/*
 * @Author: GengHH
 * @Date: 2023-07-03 17:02:28
 * @LastEditors: GengHH
 * @LastEditTime: 2023-07-03 17:12:04
 * @Description: file content
 * @FilePath: \Node\server\app\utils\pageinate.ts
 */
import { Model } from "sequelize-typescript"

/**
 * @description: 分页器工具类
 * @param data 数据
 * @param currentPage 当前页
 * @param total 数据总量
 * @param limit 每页限制数量
 * @returns 分页后的数据格式
 */
function pageinate<T extends Model[]>(
	data: T,
	currentPage: number = 1,
	total: number = 0,
	limit: number = 15
) {
	return {
		data,
		currentPage,
		total,
		limit,
		totalPage: Math.ceil(total / limit),
	}
}

export default pageinate
