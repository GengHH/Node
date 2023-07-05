import { Column, Table, Model } from "sequelize-typescript"

/**
 * 这里虽然是Admin,但是对应的数据表名叫admins
 */
@Table
class Admin extends Model {
	@Column
	name!: string
	@Column
	password!: string
	@Column
	email!: string
	@Column
	mobile!: string
}

export default Admin
