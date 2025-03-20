"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

export default function MainContainer({ children }: Readonly<Props>) {
	const pathName = usePathname().replace("/", "");
	return (
		<div>
			<div className="min-h-[100vh] flex-1 flex flex-col bg-white rounded-4xl p-10">
				<div className="flex flex-col flex-1 bg gap-5 ">
					<div>
						<Button variant="secondary" className="text-light-blue capitalize">
							{pathName} Page
						</Button>
						<Separator className="my-4 bg-light-blue" />
					</div>
					{children}
				</div>
			</div>
		</div>
	);
}
