// import Home from "@/components/Home";
import Catalog from "@/components/Catalog/Catalog";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: `Крутой интернет магазин оптимизированный под СЕО`,
	description: `Тут вы найдете странные товары, которые были в апишке`,
	openGraph: {
		type: "website",
		title: `Я не знал что это будет так сложно`,
		description: `Но если вы это читаете я хоть как то справился, может и не идеально, но я старался`,
	},
};

export default function HomePage() {
	return (
		<main>
			<Catalog />
		</main>
	);
}
