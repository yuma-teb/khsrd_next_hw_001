import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { headers } from "next/headers";
import { ReactNode } from "react";

interface Props {
	title: string;
	children: ReactNode;
}

export default async function DetailLayout({
	title,
	children,
}: Readonly<Props>) {
	const headerList = await headers();
	const pathname = headerList.get("x-invoke-path") || "";
	const pathSegments = pathname.split("/");
	const contentType = pathSegments[0];

	return (
		<div className="container mx-auto py-10">
			<h1>{pathSegments}</h1>
			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink href="/">Home</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbLink href="/books">{}</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage>{}</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>
			{children}
		</div>
	);
}
