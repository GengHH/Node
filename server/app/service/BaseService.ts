/*
 * @Author: GengHH
 * @Date: 2023-07-05 16:09:28
 * @LastEditors: GengHH
 * @LastEditTime: 2023-07-05 16:12:21
 * @Description: file content
 * @FilePath: \Node\server\app\service\BaseService.ts
 */
class BaseService {
	private Entity: any
	public constructor(entity: any) {
		this.Entity = entity
	}

	public async findById(id: number): Promise<any> {
		return await this.Entity.findByPk(id)
	}
}

export default BaseService
