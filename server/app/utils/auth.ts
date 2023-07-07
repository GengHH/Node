import config from "../config"
import {
	JsonWebTokenError,
	Jwt,
	JwtPayload,
	TokenExpiredError,
} from "./../../node_modules/@types/jsonwebtoken/index.d"
/*
 * @Author: GengHH
 * @Date: 2023-06-30 15:34:49
 * @LastEditors: GengHH
 * @LastEditTime: 2023-07-07 14:39:53
 * @Description: file content
 * @FilePath: \Node\server\app\utils\auth.ts
 */
import jwt from "jsonwebtoken"
/**
 * 数据签名（生成token）
 * @param data
 * @returns
 */
function sign(data: any) {
	return jwt.sign(data, config.jwt.jwt_secret as string, {
		expiresIn: config.jwt.jwt_expire,
	})
}
/**
 * 验签（验证token）
 * @param token
 * @returns
 */
function verify(token: string): {
	user: JwtPayload | null | string
	error: TokenExpiredError | JsonWebTokenError | null | string
} {
	try {
		const decoded = jwt.verify(token, config.jwt.jwt_secret as string)
		return {
			user: decoded,
			error: null,
		}
	} catch (err) {
		return {
			user: null,
			error: err as TokenExpiredError | JsonWebTokenError | null | string,
		}
	}
}

export { sign, verify }
