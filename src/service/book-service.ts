import { ResBooks } from "@/types/book";
import { ResponseType } from "@/types/common";
import { ContentPath } from "@/utils/enum/book";
import { CategoryPath } from "@/utils/enum/category";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_API_URL;
type QueryParams = {
	search?: string;
};

export async function fetchData(
	contentPath: ContentPath,
	queryParams?: QueryParams
): Promise<ResponseType<ResBooks>> {
	const url = new URL(`${BASE_URL}/${contentPath}`);

	if (queryParams?.search) {
		url.searchParams.append("search", queryParams?.search);
	}

	const res = await fetch(url, {
		cache: "no-cache",
		next: { tags: ["data"] },
	});
	return res.json();
}

export async function fetchCategory(contentPath: CategoryPath) {
	const url = new URL(`${BASE_URL}/${contentPath}`);

	const res = await fetch(url, {
		cache: "no-cache",
		next: { tags: ["category"] },
	});

	return res.json();
}
