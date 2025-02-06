export type IPostsResponseModel = IPost[];
export interface IPost {
	userId: number;
	id: number;
	title: string;
	body: string;
}