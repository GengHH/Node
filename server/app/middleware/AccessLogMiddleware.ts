import { Context, Next } from "koa"
import { accessLogger } from "../logger"

const AccessLogMiddleware = (etx: Context, next: Next) => {
	accessLogger.info(`path:${etx.path}`)
	next()
}

export default AccessLogMiddleware
