"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { SessionProvider } from "next-auth/react";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

declare global { 
  interface Window {
    Kakao: any;
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="ko">
      <body className="bg-background">
        <Script
          src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js"
          integrity="sha384-TiCUE00h649CAMonG018J2ujOgDKW/kVWlChEuu4jK2vxfAAD0eZxzCKakxg55G4"
          crossOrigin="anonymous"
        ></Script>
        <SessionProvider>
          {!pathname.startsWith("/auth") && <Header />}
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
