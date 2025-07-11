import type { MetaFunction } from "react-router"
import { useLoaderData } from "react-router"
import type { Route } from "../+types/root"
import type { Resource } from "../localization/resource"
import { convertDateToUserTz } from "../utils/dates"

export const meta: MetaFunction = () => {
	return [{ title: "New Remix App" }, { name: "description", content: "Welcome to Remix!" }]
}

export async function loader(args: Route.LoaderArgs) {
	const now = new Date()
	const userDate = convertDateToUserTz(now, args.request)
	return { myurl: args.request.url, currentDate: userDate }
}

export default function Index() {
	const { myurl, currentDate } = useLoaderData()

	// Using Resource type for type checking
	const resourceExample: Resource = {
		common: {
			hi: "Hello World",
			navigation: {
				back: "Go back",
				home: "Back to home",
			},
			error: {
				"500": {
					title: "Something went wrong!",
					description: "Looks like something unexpected happened on the server.",
				},
				"404": {
					title: "Page Not found!",
					description: "Oops! The page you're looking for seems to have vanished into thin air.",
				},
				"403": {
					title: "Unauthorized!",
					description: "Looks like you can't access this page.",
				},
				"200": {
					title: "Something went wrong!",
					description: "Looks like something unexpected happened on the server.",
				},
			},
		},
	}

	return (
		<div>
			<h1>This is the new Starter Kit</h1>
			<p>URL: {myurl}</p>
			<p>Current Date: {currentDate.toString()}</p>
			<p>Resource example: {resourceExample.common.hi}</p>
		</div>
	)
}
