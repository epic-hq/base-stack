import * as Module from "./_index"

describe("Home route", () => {
	it("should render the home page text properly in english", async ({ renderStub }) => {
		const { getByText } = await renderStub({
			entries: [
				{
					id: "home",
					path: "/",
					Component: () => Module.default(),
				},
			],
		})

		expect(
			getByText("React Router is awesome!", {
				exact: false,
			})
		).not.toBeNull()
	})

	it("should render the home page text properly with explicit language set", async ({ renderStub }) => {
		const { getByText } = await renderStub({
			entries: [
				{
					id: "home",
					path: "/",

					Component: () => Module.default(),
				},
			],
			i18n: {
				lng: "en",
			},
		})

		expect(
			getByText("Rick & Jett Starter Kit", {
				exact: false,
			})
		).not.toBeNull()
	})
})
