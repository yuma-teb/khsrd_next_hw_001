"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@radix-ui/react-separator";
import { MessageSquareText, Search } from "lucide-react";
import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

export default function MainContaienr({ children }: Readonly<Props>) {
	return (
		<div className="flex flex-1 flex-col gap-4 p-4 pt-5 ">
			<div className="relative h-10 w-2/8 ">
				<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 z-10" />
				<Input
					type="text"
					placeholder="Enter your comment here"
					className="pl-10 pr-3 py-2 text-md w-full border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6E23DD] focus:border-transparent"
					value=""
				/>
			</div>
			<div className="flex flex-col bg-white rounded-4xl p-5 px-4">
				<div className="flex flex-col">
					<div>
						<Button variant="secondary">HomePage</Button>
						<Separator className="my-4" />
					</div>
				</div>
				{children}
			</div>
		</div>
	);
}
