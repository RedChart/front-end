'use client'

import { useSearchParams } from "next/navigation";

export default function Home() {
    const searchParams = useSearchParams();
    const authCode = searchParams.get("code");
    console.log(authCode);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>home</div>
    </main>
  );
}
