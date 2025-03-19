import DetailLayout from "@/components/layout/detail/detail-content-layout";
import { headers } from "next/headers";

export default async function BookDetailLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const headersList = await headers();
	const pathname = headersList.get("x-current-path") || "";

	return (
		<DetailLayout title={""}>
			<h1>{pathname}</h1>
			{children}
		</DetailLayout>
	);
}
