import axios from "axios";

// 사용자 관련 API
export const userAxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_USER_URL,
  withCredentials: true, // 쿠키 및 인증 정보를 서버로 전송
});

// 포스트 관련 API
export const postAxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_POST_URL,
});

// 뉴스피드 관련 API
export const newsfeedAxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_NEWSFEED_URL,
});

// 일반 서버 관련 API
export const generalAxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
});
