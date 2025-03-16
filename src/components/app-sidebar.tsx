import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuAction,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarTrigger,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { USER_PROFILE_MOCK } from "@/_mock/_user-profile";
import { _SIDE_BAR_MOCK } from "@/_mock/_side-bar-mock";
import Link from "next/link";
import { Settings } from "lucide-react";

interface Props {
	currentPath: string;
}

const isCurrentPath = (itemPath: string, currentPath: string): boolean => {
	return itemPath === currentPath;
};

export function AppSidebar({ currentPath }: Readonly<Props>) {
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
									isActive={isCurrentPath(currentPath, item.link as string)}
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
