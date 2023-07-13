import * as log4js from "log4js"
log4js.configure({
	appenders: {
		cheese: { type: "file", filename: "logs/cheese.log" },
		access: { type: "file", filename: "logs/access.log" },
		db: { type: "file", filename: "logs/db.log" },
	},
	categories: {
		default: { appenders: ["cheese"], level: "info" },
		access: { appenders: ["access"], level: "info" },
		db: { appenders: ["db"], level: "info" },
	},
})

const logger = log4js.getLogger("cheese")
logger.trace("Entering cheese testing")
logger.debug("Got cheese.")
logger.info("Cheese is Comté.")
logger.warn("Cheese is quite smelly.")
logger.error("Cheese is too ripe!")
logger.fatal("Cheese was breeding ground for listeria.")

export const accessLogger = log4js.getLogger("access")
export const dbLogger = log4js.getLogger("db")
export default logger

/**
 * 官方示例配置
 */
// log4js.configure("./log4js.json")
// const log = log4js.getLogger("startup")
// log.trace("Entering cheese testing")
// log.debug("Got cheese.")
// log.info("Cheese is Comté.")
// log.warn("Cheese is quite smelly.")
// log.error("Cheese is too ripe!")
// log.fatal("Cheese was breeding ground for listeria.")

// export default log
// export const accessLogger = log4js.getLogger("access")
