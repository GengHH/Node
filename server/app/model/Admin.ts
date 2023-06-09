import { Column, Table, Model } from "sequelize-typescript"

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
