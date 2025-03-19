import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BookCardProps } from "./type";
import Link from "next/link";

export default function BookCard({
	id,
	image,
	book_title,
	description,
}: Readonly<BookCardProps>) {
	return (
		<div className="flex items-end px-6 py-9 bg-neutral-100 shadow-md rounded-lg">
			{/* Image */}
			<div className="mr-6 flex flex-col gap-2 justify-end relative">
				<div className="w-[160px] h-[200px] absolute mb-12">
					<Image
						fill
						src={image}
						alt={book_title}
						className="rounded-lg shadow-2xl"
					/>
				</div>
				<Link href={`/books/${id}`} className="cursor-pointer">
					<Button>READ FULL ARTICLE</Button>
				</Link>
			</div>

			{/* Content */}
			<div>
				<h3 className="text-xl font-bold text-gray-800">{book_title}</h3>
				<p className="mt-2 text-gray-600 line-clamp-4">{description}</p>
			</div>
		</div>
	);
}
