import { UserProps } from "./user";

export interface PostProps {
	id: number;
	title: string;
	content: string;
	CreatedAt: string;
	UpdatedAt?: string;
	createUser: UserProps;
}
