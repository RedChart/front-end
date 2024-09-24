"use client";

import React, { useState } from "react";
import Link from "next/link";
import { TextInput } from "@/components/common/TextInput";
import Button from "@/components/common/Button";
import { BsChatFill } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { userAxiosInstance } from "@/app/api/axios";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [showPw, setShowPw] = useState(false);

  const router = useRouter();

  const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}&response_type=code`;
  // 회원가입 api
  const userSignUpApi = async () => {
    try {
      const response = await userAxiosInstance.post(`/api/users/signup`, {
        email,
        username,
        password,
      });
      if (response.status === 200) {
        console.log("response", response);
        setTimeout(() => {
          router.push("/auth/login"); // 로그인 페이지로 리디렉션
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === "email") {
      setEmail(e.target.value);
    } else if (e.target.id === "username") {
      setUsername(e.target.value);
    } else setPassword(e.target.value);
  };

  const handleRegisterSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    userSignUpApi();
  };

  return (
    <div className="h-full grid place-items-center">
      <section className="w-6/12 min-w-[500px] grid place-items-center px-5 py-2">
        <h1
          className="mb-3 font-bold text-4xl text-main whitespace-nowrap cursor-pointer"
          onClick={() => router.push("/")}
        >
          Red Chart
        </h1>
        <p>
          이미 회원이신가요?{" "}
          <Link href="/auth/login" className="text-main font-bold underline">
            로그인
          </Link>
        </p>
        <form className="w-full max-w-[500px] bg-main-light mt-2 px-11 py-12 rounded-xl">
          <div className="flex flex-col justify-center gap-6">
            <TextInput
              id="email"
              title="이메일"
              text="이메일을 입력하세요."
              value={email}
              htmlFor="email"
              onChange={handleInputChange}
            />
            <TextInput
              id="password"
              title="비밀번호"
              text="비밀번호를 입력하세요."
              value={password}
              htmlFor="password"
              type={showPw ? "text" : "password"}
              onChange={handleInputChange}
              onCheckChange={() => setShowPw(!showPw)}
            />
            <TextInput
              id="username"
              title="닉네임"
              text="닉네임을 입력하세요."
              value={username}
              onChange={handleInputChange}
              htmlFor="username"
            />
          </div>
          <div className="mt-14 flex flex-col gap-2">
            <label htmlFor="agree" className="flex align-center ml-1 text-sm ">
              <input id="agree" type="checkbox" className="accent-main mr-1" />
              개인정보처리방침 및 이용약관에 동의합니다.
            </label>
            <Button
              fill
              text="회원가입"
              isSubmit
              onClick={handleRegisterSubmit}
            />
            <button
              className="
            flex
            justify-center
            items-center
            gap-2
            bg-point-yellow
            rounded-lg
            shadow-lg
            px-5
            py-3
            whitespace-nowrap
            font-bold"
              onClick={() => router.push(KAKAO_AUTH_URI)}
            >
              <BsChatFill className="w-4 h-4" />
              <span className="mt-0.5">카카오로 회원가입</span>
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
