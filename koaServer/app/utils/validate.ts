/*
 * @Author: GengHH
 * @Date: 2023-07-06 15:25:50
 * @LastEditors: GengHH
 * @LastEditTime: 2023-07-06 18:04:38
 * @Description: file content
 * @FilePath: \Node\server\app\utils\validate.ts
 */
import Schema, { Rules, Values } from "async-validator"
import { Context } from "koa"

/**
 * 校验数据
 * @param ctx 上下文
 * @param rules 校验规则
 * @returns
 */
async function validate<T extends Values>(
	ctx: Context,
	rules: Rules,
	flag: boolean = false
): Promise<{ data: T; error: any | null }> {
	const data: any = getFormData(ctx)
	console.log("validate data", data)
	const validator = new Schema(rules)
	return await validator
		.validate(data)
		.then(() => {
			return {
				data: data as T,
				error: null,
			}
		})
		.catch(({ errors }) => {
			if (flag) {
				return {
					data: {} as T,
					error: errors,
				}
			}
			return {
				data: {} as T,
				error: errors[0]?.message,
			}
		})
}

/**
 * 获取前端请求的参数
 * @param ctx 上下文
 * @returns
 */
function getFormData(ctx: Context) {
	let data: any = {}
	// TODO 不仅get,post
	switch (ctx.method) {
		case "GET":
			const usp = new URLSearchParams(ctx.querystring)
			console.log("usp", usp)
			for (const [key, value] of usp) {
				data[key] = value
			}

		case "POST":
			console.log(ctx.request.body)
			data = ctx.request.body || {}
	}
	return data
}
export default validate
