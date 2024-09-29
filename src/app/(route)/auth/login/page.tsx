"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { TextInput } from "@/components/common/TextInput";
import Button from "@/components/common/Button";
import { BsChatFill } from "react-icons/bs";
import { useRouter, useSearchParams } from "next/navigation";
import { userAxiosInstance } from "@/app/api/axios";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}&response_type=code`;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === "username") {
      setUsername(e.target.value);
    } else setPassword(e.target.value);
  };

  const handleLoginClick = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(""); // 기존 에러 초기화

    try {
      // 비동기 처리로 로그인 요청
      const response = await userAxiosInstance.post(`/api/users/signin`, {
        username,
        password,
      });
      if (response.status === 200) {
        console.log("response", response);
          router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleKakaoLoginClick = () => {
    router.push(KAKAO_AUTH_URI);
  };

  return (
    <div className="h-full grid place-items-center">
      <section className="w-6/12 min-w-[500px] grid place-items-center px-5 py-2">
        <h1
          className="font-bold text-4xl text-main whitespace-nowrap cursor-pointer"
          onClick={() => router.push("/")}
        >
          Red Chart
        </h1>
        <form className="w-full max-w-[500px] bg-main-light my-4 px-11 py-12 rounded-xl">
          <div className="flex flex-col justify-center gap-6">
            <TextInput
              id="username"
              title="아이디"
              text="아이디를 입력하세요."
              value={username}
              htmlFor="username"
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
          </div>
          <div className="mt-14 flex flex-col gap-2">
            <Button text="로그인" isSubmit onClick={handleLoginClick} />
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
              onClick={handleKakaoLoginClick}
            >
              <BsChatFill className="w-4 h-4" />
              <span className="mt-0.5">카카오로 로그인</span>
            </button>
          </div>
        </form>
        <p>
          아직 회원이 아니신가요?{" "}
          <Link href="/auth/signup" className="text-main font-bold underline">
            회원가입
          </Link>
        </p>
      </section>
    </div>
  );
}
