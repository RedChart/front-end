import PostCard from "@/components/PostCard";
import React from "react";

const FeedPage = () => {
  return (
    <div className="w-full h-full">
      <h1 className="font-bold text-2xl mb-6">뉴스피드</h1>
      <div className="flex flex-col gap-4">
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
};

export default FeedPage;
