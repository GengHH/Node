/*
 * @Author: GengHH
 * @Date: 2023-06-30 16:02:47
 * @LastEditors: GengHH
 * @LastEditTime: 2023-06-30 17:05:53
 * @Description: file content
 * @FilePath: \Node\server\app\middleware\AuthMiddleware.ts
 */
import { Context, Next } from "koa"
// import { accessLogger } from "../logger"
import { verify } from "../utils/auth"

const AuthMiddleware = (etx: Context, next: Next) => {
	// accessLogger.info(`path:${etx.path}`)
	const token = etx.headers["authorization"]
	if (token) {
		const { error } = verify(token as string)
		if (error !== null) {
			etx.body = {
				msg: error,
				code: 4000,
			}
			return
		} else {
			return next()
		}
	}
	etx.body = {
		msg: "authorization can't be null",
		code: 4000,
	}
	return
}

export default AuthMiddleware
