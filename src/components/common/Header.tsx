import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full h-[80px] flex items-center gap-20 bg-white px-[15%]">
      <Link href="/" className="text-main text-2xl font-bold whitespace-nowrap">
        Red Chart
      </Link>
      <div className="w-full flex justify-between items-center gap-10">
        <nav className="flex w-full gap-20 font-bold whitespace-nowrap">
          <Link href="/">홈</Link>
          <Link href="/chart">주가 목록</Link>
        </nav>

        <div className="flex gap-5">
          <Link
            href="/auth/signup"
            className="px-5 py-1.5 bg-white border border-solid border-main text-main rounded-lg whitespace-nowrap"
          >
            회원가입
          </Link>
          <Link
            href="/auth/login"
            className="px-5 py-1.5 bg-main border border-solid border-white text-white rounded-lg whitespace-nowrap"
          >
            로그인
          </Link>
        </div>
      </div>
    </header>
  );
}
