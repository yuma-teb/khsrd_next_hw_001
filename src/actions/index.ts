"use server";

import { ResBookCategory } from "@/types/book";
import { ResponseType } from "@/types/common";
import { CategoryPath } from "@/utils/enum/category";
import { fetchCategory } from "@/service/book-service";

export async function fetchCategoryData(
	pathCategory: CategoryPath
): Promise<ResponseType<ResBookCategory>> {
	try {
		const res = await fetchCategory(pathCategory);
		console.log("Server action result:", res);
		return res;
	} catch (error) {
		console.error("Server action error:", error);
		throw error;
	}
}
