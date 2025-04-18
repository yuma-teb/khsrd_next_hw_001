export interface ResBooks {
	id: number;
	created_at: string;
	book_title: string;
	book_author: string;
	description: string;
	image: string;
	book_cat_id: number;
}

export interface ResBookCategory {
	id: number;
	created_at: string;
	book_cate_name: string;
}
