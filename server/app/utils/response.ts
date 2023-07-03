/*
 * @Author: GengHH
 * @Date: 2023-07-03 13:51:35
 * @LastEditors: GengHH
 * @LastEditTime: 2023-07-03 14:09:15
 * @Description: file content
 * @FilePath: \Node\server\app\utils\response.ts
 */
import { Context } from "koa"

/**
 * @description: 成功时返回的数据类型
 * @param {Context} ctx
 * @param {any} data
 * @param {*} message
 * @param {*} code
 * @return {*}
 */
function success(ctx: Context, data: any = [], message = "", code = 0) {
	ctx.body = {
		code,
		message,
		data,
	}
}
/**
 * @description: 失败时返回的数据类型
 * @param {Context} ctx
 * @param {*} message
 * @param {any} data
 * @param {*} code
 * @return {*}
 */
function error(ctx: Context, message = "", data: any = [], code = 1) {
	ctx.body = {
		code,
		message,
		data,
	}
}

export default {
	success,
	error,
}
