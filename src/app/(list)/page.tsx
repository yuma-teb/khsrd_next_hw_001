import { CARD_HOME_PAGE_MOCK } from "@/_mock/_card-mock";
import { Card } from "@/components/card";

export default function Page() {
	return (
		<div className="flex justify-center items-center gap-4 p-4 pt-0  h-full">
			{CARD_HOME_PAGE_MOCK.map((card) => (
				<Card {...card} />
			))}
		</div>
	);
}
