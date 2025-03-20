import BookCard from "@/components/book/card/book-card";
import { fetchData } from "@/service/book-service";
import { ResBooks } from "@/types/book";
import { ContentPath } from "@/utils/enum/book";

interface Props {
	params: any;
	searchParams: {
		search?: string;
	};
}

export default async function Page({ searchParams }: Readonly<Props>) {
	const books = await fetchData(ContentPath.BOOK, {
		search: searchParams?.search,
	});
	return (
		<div className="grid grid-cols-2 gap-x-10 gap-y-22 pt-20">
			<p className="text-xl"> </p>
			{(books.payload as ResBooks[])?.map((book) => (
				<BookCard key={book.id} {...book} />
			))}
		</div>
	);
}
