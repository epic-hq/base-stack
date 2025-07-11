import { useTranslation } from "react-i18next"
import { Link, type MetaFunction } from "react-router"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"

export const meta: MetaFunction = () => {
	return [{ title: "New Remix App" }, { name: "description", content: "Welcome to Remix!" }]
}

export default function Index() {
	const { t } = useTranslation()
	return (
		<div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 p-4 dark:from-blue-950 dark:to-blue-900 dark:text-white">
			<Card className="w-1/2">
				<CardHeader>
					<CardTitle>{t("hi")}</CardTitle>
				</CardHeader>
				<CardContent>
					<Link to="/test">Test Link</Link>
				</CardContent>
			</Card>
		</div>
	)
}
