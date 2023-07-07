/*
 * @Author: GengHH
 * @Date: 2023-06-30 16:02:47
 * @LastEditors: GengHH
 * @LastEditTime: 2023-07-07 14:42:28
 * @Description: file content
 * @FilePath: \Node\server\app\middleware\AuthMiddleware.ts
 */
import { Context, Next } from "koa"
// import { accessLogger } from "../logger"
import { verify } from "../utils/auth"
import response from "../utils/response"

/**
 * 验签token的中间件
 * @param ctx
 * @param next
 * @returns
 */
const AuthMiddleware = (ctx: Context, next: Next) => {
	// accessLogger.info(`path:${ctx.path}`)
	const token = ctx.headers["authorization"]
	if (token) {
		const { error } = verify(token as string)
		//验签失败
		if (error !== null) {
			// TODO
			ctx.body = {
				msg: error,
				code: 4000,
			}
			return
		} else {
			//验签成功
			return next()
		}
	}
	//前端请求Header没有传入authorization
	response.error(ctx, "authorization can't be null", {}, 4000)
	return
}

export default AuthMiddleware
