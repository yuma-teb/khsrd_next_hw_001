import BookCard from "@/components/book/card/book-card";
import { fetchAllBooks } from "@/service/product.service";
import { ResBooks } from "@/types/book";

export default async function Page() {
	const books = await fetchAllBooks();
	return (
		<div className="grid grid-cols-2 gap-x-10 gap-y-22 pt-20">
			{(books.payload as ResBooks[])?.map((book) => (
				<BookCard key={book.id} {...book} />
			))}
		</div>
	);
}
