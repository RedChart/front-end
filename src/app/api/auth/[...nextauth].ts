import NextAuth, { NextAuthOptions } from "next-auth";
import KakaoProvider from "next-auth/providers/kakao";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { userAxiosInstance } from '../axios';

export const authOptions: NextAuthOptions = {
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID!,
      clientSecret: process.env.KAKAO_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "RedChart",
      credentials: {
        email: { label: "Email", type: "text" },
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const response = await userAxiosInstance.post("/api/auth/signin", {
            username: credentials?.username,
            password: credentials?.password,
          });

          const user = response.data;

          if (user) {
            return user; // 로그인 성공 시 사용자 객체 반환
          } else {
            return null; // 로그인 실패 시 null 반환
          }
        } catch (error) {
          console.error("Error in credentials authorization:", error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
  session: {
    strategy: "jwt",
  },
  // callbacks: {
  //   async jwt({ user, token }) {
  //     if (user) {
  //       token.Authorization = user?.accessToken;
  //       token.refreshToken = user.refreshToken;
  //     }
  //     return token;
  //   },
  //   async session({ token, session }) {
  //     session.Authorization = token.Authorization;
  //     session.RefreshToken = token.refreshToken;
  //     return session;
  //   },
  // },
  secret: process.env.NEXTAUTH_SECRET, // NextAuth.js 암호화 키 설정
};

export default NextAuth(authOptions);
