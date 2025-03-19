import { ResBooks } from "@/types/book";
import { ResponseType } from "@/types/common";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_API_URL;
export async function fetchAllBooks(): Promise<ResponseType<ResBooks>> {
	const res = await fetch(`${BASE_URL}/book`);

	return res.json();
}
