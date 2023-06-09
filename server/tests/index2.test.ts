describe("sum set", () => {
	it("sum 1", () => {
		expect(1 + 1).toEqual(2)
	})
})

const can = {
	name: "pamplemousse",
	ounces: 12,
}

describe("the can", () => {
	test("has 12 ounces", () => {
		expect(can.ounces).toBe(12)
	})

	test("has a sophisticated name", () => {
		expect(can.name).toBe("pamplemousse")
	})
})
