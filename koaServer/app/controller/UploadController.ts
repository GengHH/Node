const path = require("path")
import { Context } from "koa"
import fs from "fs"
import response from "../utils/response"
/**
 * @description:
 * @return {*}
 */
class UploadController {
	upload = async (ctx: Context) => {
		const file = ctx.request.files?.file
		console.log(file)
		if (file) {
			// @ts-ignore
			console.log(file.filepath)
			// @ts-ignore
			const reader = fs.createReadStream(file.filepath)
			// @ts-ignore
			const ext = path.extname(file.originalFilename)
			const fileSavePath = "/upload/" + this.randomStr(10) + ext
			const writer = fs.createWriteStream("statics" + fileSavePath)
			reader.pipe(writer)
			response.success(ctx, { file: fileSavePath })
		} else {
			response.error(ctx, "文件不可为空")
		}
	}
	randomStr = (length: number): string => {
		const seeder =
			"ABCDEFGHIJKLIMNOPQRSTUVWXYZabcdefghijklimnopqrstuvwxyz1234567890"
		let str = ""
		for (let i = 0; i < length; i++) {
			str += seeder.charAt(Math.floor(Math.random() * seeder.length))
		}
		return str
	}
}

export default new UploadController()
