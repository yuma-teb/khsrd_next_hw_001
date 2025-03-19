"use client";

import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { USER_PROFILE_MOCK } from "@/_mock/_user-profile";
import { _SIDE_BAR_MOCK } from "@/_mock/_side-bar-mock";
import Link from "next/link";
import { Settings } from "lucide-react";
import { usePathname } from "next/navigation";

const isCurrentPath = (itemPath: string, currentPath: string): boolean => {
	return itemPath === currentPath;
};

export function AppSidebar() {
	const pathname = usePathname();
	console.log("path name");

	return (
		<>
			<Sidebar variant="floating">
				<SidebarHeader className="flex flex-col items-center">
					<Avatar className="h-20 w-20">
						<AvatarImage src={USER_PROFILE_MOCK.profileImage} />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
					<p className="text-lg text font-medium">{USER_PROFILE_MOCK.name}</p>
					<p>{USER_PROFILE_MOCK.email}</p>
				</SidebarHeader>
				<SidebarContent>
					<SidebarMenu>
						{_SIDE_BAR_MOCK.map((item) => (
							<SidebarMenuItem key={item.name}>
								<SidebarMenuButton
									asChild
									isActive={isCurrentPath(pathname, item.link as string)}
								>
									<Link href={item?.link as string}>
										<item.icon />
										<span>{item.name}</span>
									</Link>
								</SidebarMenuButton>
							</SidebarMenuItem>
						))}
					</SidebarMenu>
				</SidebarContent>
				<SidebarFooter>
					<SidebarMenuItem>
						<SidebarMenuButton className="py-6 bg-neutral-200">
							<Settings />
							<span className="text-md">Setting</span>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarFooter>
			</Sidebar>
		</>
	);
}
