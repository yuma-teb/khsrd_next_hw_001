"use server";

import { ReactNode } from "react";
import TagCompnent from "./tag-component";
interface Props {
	children: ReactNode;
}

export default async function MainContainer({ children }: Readonly<Props>) {
	return (
		<div>
			<div className="min-h-[100vh] flex-1 flex flex-col bg-white rounded-4xl p-10">
				<TagCompnent />
				<div className="flex flex-col flex-1 bg gap-5 ">{children}</div>
			</div>
		</div>
	);
}
