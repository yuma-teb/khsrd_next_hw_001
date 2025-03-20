import { AppSidebar } from "@/components/app-sidebar";
import MainContaienr from "@/components/layout/main/main-container";
import SearchComponent from "@/components/search/search";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ReactNode } from "react";

interface Props {
	children: ReactNode;
	params: { path: string };
}

export default async function SidebarLayout({
	children,
	params,
}: Readonly<Props>) {
	console.log("fghjklasfgdhjgffsdaghjrgdhasfgd", params.path);
	return (
		<SidebarProvider>
			<AppSidebar />
			<main className="flex flex-1 flex-col gap-4 p-4 pt-0 w-full bg-accent ">
				<div className="flex flex-1 flex-col gap-4 p-10 pt-5  ">
					<div className="flex gap-3 items-center">
						<SearchComponent />
					</div>
					<MainContaienr>{children}</MainContaienr>
				</div>
			</main>
		</SidebarProvider>
	);
}
