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
      {children} 
    </>
  );
};

export default AuthProvider;
