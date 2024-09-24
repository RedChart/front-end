import { UserProps } from "@/types/user";
import { PostProps } from '../types/post';

export const testUser: UserProps ={ 
	username: "닉네임",
	password: "test"
}

export const testPostItem: PostProps = {
	id: 1,
	title: "포스트 제목입니다",
	content: "포스트 내용입니다. 포스트 내용입니다. 포스트 내용입니다.",
	CreatedAt: "24.8.10",
	createUser: testUser
}