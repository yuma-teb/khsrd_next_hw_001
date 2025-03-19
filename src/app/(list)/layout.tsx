import { AppSidebar } from "@/components/app-sidebar";
import MainContaienr from "@/components/layout/main/main-container";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { headers } from "next/headers";
import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

export default async function SidebarLayout({ children }: Readonly<Props>) {
	return (
		<SidebarProvider>
			<AppSidebar />
			<main className="flex flex-1 flex-col gap-4 p-4 pt-0 w-full h-screen">
				<div className="flex gap-3 items-center">
					<SidebarTrigger />
				</div>
				<MainContaienr>{children}</MainContaienr>
			</main>
		</SidebarProvider>
	);
}
