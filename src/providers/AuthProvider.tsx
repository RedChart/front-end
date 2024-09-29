"use client";

import { usePathname } from "next/navigation";
import React from "react";
import Header from "@/components/common/Header";

interface Props {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const pathname = usePathname();
  const isAuthPath = pathname.startsWith("/auth");

  return (
    <>
      {!isAuthPath && <Header />}
      <main className="w-full h-full flex min-h-screen flex-col justify-center px-[20%] items-center  py-11">
        {children}
      </main>
    </>
  );
};

export default AuthProvider;
