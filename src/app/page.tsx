'use client'

import { useSearchParams } from "next/navigation";
import FeedPage from "./(route)/feed/page";

export default function Home() {
    const searchParams = useSearchParams();
    const authCode = searchParams.get("code");
    console.log(authCode);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 py-11">
      <FeedPage />
    </main>
  );
}
