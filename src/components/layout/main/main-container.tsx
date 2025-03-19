"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquareText, Search } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

export default function MainContainer({ children }: Readonly<Props>) {
	return (
		<div className="flex flex-1 flex-col gap-4 p-10 pt-5 bg-accent ">
			{/* <div className="relative h-10 w-full md:w-2/8 ">
				<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 z-10" />
				<Input
					size={10}
					type="text"
					placeholder="Enter your comment here"
					className="pl-10 pr-3 py-2 text-md w-full border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6E23DD] focus:border-transparent bg-white"
					value=""
				/>
			</div> */}
			<div className="min-h-[100vh] flex-1 flex flex-col bg-white rounded-4xl p-10">
				<div className="flex flex-col flex-1 bg gap-5 ">
					<div>
						<Button variant="secondary" className="text-light-blue">
							HomePage
						</Button>
						<Separator className="my-4 bg-light-blue" />
					</div>
					{children}
				</div>
			</div>
		</div>
	);
}
