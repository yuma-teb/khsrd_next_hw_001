"use client";

import { cn } from "@/lib/utils";
import { CardProps } from "./type";
import { Button } from "../ui/button";
import { Tag } from "lucide-react";

export default function Card({
	className,
	image = "https://i.pinimg.com/736x/53/e8/f1/53e8f18f8f5de79e7848a658bdb064df.jpg",
	lable,
	hoverText,
}: Readonly<CardProps>) {
	return (
		<div className="max-w-xs w-full group/card">
			<div
				style={{ backgroundImage: `url(${image})` }}
				className={cn(
					" cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  bg-cover max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
					className
				)}
			>
				<div className="absolute inset-0 transition-all duration-300 opacity-0 group-hover/card:opacity-100 bg-black/20 flex flex-col justify-center items-center text-white text-4xl font-semibold">
					<p className="px-4 text-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
						{hoverText}
					</p>
				</div>

				<div className="flex flex-row items-center space-x-4 z-10">
					<Button>
						<Tag /> {lable}
					</Button>
				</div>
			</div>
		</div>
	);
}
