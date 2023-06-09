import run from "../app/index"
import request from "supertest"
import { Server } from "http"
describe("test http", () => {
	let server: Server
	beforeAll(() => {
		server = run(3003)
	})
	it("GET /admin", () => {
		return request(server).get("/admin").expect(200)
	})
	afterAll(async () => {
		server.close()
	})
})
