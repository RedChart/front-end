import React from "react";
import PostCard from "@/components/PostCard";
import { LuPenSquare } from "react-icons/lu";
import Link from "next/link";

export default function FeedPage() {

  return (
    <div className="w-full h-full">
      <div className="flex justify-between items-end mb-6">
        <h1 className="font-bold text-2xl">뉴스피드</h1>
        <Link href="/feed/post/create">
          <LuPenSquare />
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
};