import { PostProps } from "@/types/post";
import { UserProps } from "@/types/user";
import Image from "next/image";
import React from "react";

interface ProfileProps {
  user: UserProps;
  post: PostProps;
}

export default function Profile({ user, post }: ProfileProps) {
  return (
    <div className="h-full flex gap-2 items-center">
      <div className="rounded-full w-8 h-8 relative overflow-hidden">
        <Image
          src="/images/testImg.png"
          alt="프로필 사진"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <p className="text-sm">{user.username}</p>
      <div className="w-px h-4 bg-gray-400" />
      <p className="text-xs text-gray-600">{post.CreatedAt}</p>
    </div>
  );
}
