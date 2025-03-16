import {
	Home,
	Book,
	Tv,
	Music,
	Camera,
	Dumbbell,
	Cpu,
	Globe,
	PenTool,
} from "lucide-react";

export interface ISideBar {
	name: string;
	icon: any;
	link?: string;
}

export const _SIDE_BAR_MOCK: ISideBar[] = [
	{ name: "Home", icon: Home, link: "/" },
	{ name: "Book Categories", icon: Book, link: "/books" },
	{ name: "Old-School Cartoons", icon: Tv, link: "/cartoons" },
	{ name: "Movies & TV Shows", icon: Tv, link: "/movies-tv" },
	{ name: "Music", icon: Music, link: "/music" },
	{ name: "Photography", icon: Camera, link: "/photography" },
	{ name: "Sports & Fitness", icon: Dumbbell, link: "/sports-fitness" },
	{ name: "Technology & Gadgets", icon: Cpu, link: "/tech-gadgets" },
	{ name: "Travel & Exploration", icon: Globe, link: "/travel-exploration" },
	{ name: "Writing & Journaling", icon: PenTool, link: "/writing-journaling" },
];
