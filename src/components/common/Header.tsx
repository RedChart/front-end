"use client";

import Link from "next/link";
import React from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  return (
    <header className="flex items-center h-[80px] w-full bg-[#fff] px-[10%]">
      <Link href="/" className="text-main text-2xl font-bold whitespace-nowrap">
        Red Chart
      </Link>
      <div className="flex justify-between items-center w-full ml-20">
        <nav className="flex w-full gap-10 font-bold whitespace-nowrap">
          <Link href="/">홈</Link>
          <Link href="/chart">주가 목록</Link>
        </nav>
        
          <div className="flex gap-5 ml-20">
            <Button
              text="회원가입"
              small
              onClick={() => router.push("/auth/signup")}
            />
            <Button
              fill
              text="로그인"
              small
              onClick={() => router.push("/auth/login")}
            />
          </div>
        
      </div>
    </header>
  );
}
