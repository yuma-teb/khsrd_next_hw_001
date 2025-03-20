"use client";

import { FilterComponent } from "@/components/filter";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchCategoryData } from "@/actions";
import { CategoryPath } from "@/utils/enum/category";
import { ResBookCategory } from "@/types/book";

export default function TagCompnent() {
	const [categories, setCategories] = useState<ResBookCategory[]>([]);

	const pathName = usePathname().replace("/", "");
	const searchParams = useSearchParams();

	const fetchData = async (pathCategory: CategoryPath) => {
		try {
			const res = await fetchCategoryData(pathCategory);
			console.log("Client received:", res);

			if (!res || !res.payload) {
				console.error("Invalid response format:", res);
				return;
			}

			setCategories(res.payload as ResBookCategory[]);
		} catch (error) {
			console.error("Error fetching categories:", error);
		}
	};

	useEffect(() => {
		const pathCategory =
			pathName === "books"
				? CategoryPath.BOOK_CATEGORY
				: CategoryPath.CARTOON_CATEGORY;

		fetchData(pathCategory);
	}, [pathName]);

	return (
		<div>
			<div className="flex justify-between">
				<Button variant="secondary" className="text-light-blue capitalize">
					{pathName} Page
				</Button>
				<FilterComponent categories={[]} />
			</div>
			<Separator className="my-4 bg-light-blue" />
		</div>
	);
}
