"use client";

import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { SearchComponentProps } from "./type";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function SearchComponent(props: Readonly<SearchComponentProps>) {
	const searchParams = useSearchParams();
	const { replace } = useRouter();
	const pathname = usePathname().replace("/", "");

	const handleSearch = useDebouncedCallback((term: string) => {
		const params = new URLSearchParams(searchParams);
		if (term) {
			params.set("search", term);
		} else {
			params.delete("search");
		}
		replace(`${pathname}?${params.toString()}`);
	}, 300);

	return (
		<Input
			className={cn("h-16 py-4 text-xl rounded-lg", props.className)}
			onChange={(e) => handleSearch(e.target.value)}
			placeholder={`Search any ${pathname}`}
			defaultValue={searchParams.get("search")?.toString()}
		/>
	);
}
