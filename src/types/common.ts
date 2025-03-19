export interface ResponseType<T> {
	status: number;
	message: string;
	payload: T[] | T;
}
