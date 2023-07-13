/*
 * @Author: GengHH
 * @Date: 2023-07-04 16:04:01
 * @LastEditors: GengHH
 * @LastEditTime: 2023-07-06 18:08:11
 * @Description: file content
 * @FilePath: \Node\server\app\model\UserInfo.ts
 */
import { Table, Column, Model, DataType, AllowNull } from "sequelize-typescript"

@Table({
	tableName: "userInfo",
})
export class UserInfo extends Model<UserInfo> {
	@Column({
		primaryKey: true,
		autoIncrement: true,
	})
	id!: number

	@AllowNull(false)
	@Column({
		type: DataType.STRING,
		comment: "姓名",
	})
	name!: string

	@AllowNull(false)
	@Column({
		type: DataType.STRING,
		comment: "密码",
	})
	password!: string

	@AllowNull(true)
	@Column({
		type: DataType.INTEGER,
		comment: "性别",
	})
	sex!: number

	@AllowNull(true)
	@Column({
		type: DataType.INTEGER,
		comment: "头像",
	})
	avata!: number
}

export default UserInfo
