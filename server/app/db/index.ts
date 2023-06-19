/*
 * @Author: GengHH
 * @Date: 2023-06-09 14:19:45
 * @LastEditors: GengHH
 * @LastEditTime: 2023-06-14 17:21:27
 * @Description: file content
 * @FilePath: \Node\server\app\db\index.ts
 */
import path from "path"
import { Sequelize } from "sequelize-typescript"
import { dbLogger } from "../logger"

const sequelize = new Sequelize("mysql", "root", "123456", {
	host: "localhost",
	port: 3306,
	dialect: "mysql",
	logging: (msg) => dbLogger.info(msg),
	define: {
		timestamps: true,
		createdAt: "created_at",
		updatedAt: "updated_at",
		deletedAt: "deleted_at",
	},
	models: [
		path.join(__dirname, "..", "model/**/*.ts"),
		path.join(__dirname, "..", "model/**/*.js"),
	],
})

const db = async () => {
	try {
		await sequelize.authenticate()
		console.log("Connection has been established successfully.")
	} catch (error) {
		console.error("Unable to connect to the database:", error)
	}
}

export default db
