"use client"

import React, { useState } from 'react';
import Profile from "./common/Profile";
import { testPostItem, testUser } from "@/utils/staticDatas";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { IoChatbubbleOutline } from "react-icons/io5";

export default function PostCard() {
	const [like, setLike] = useState(false);

	return (
    <div className="flex flex-col gap-4 bg-white rounded-2xl border border-solid border-gray-300 px-7 pt-6 pb-5">
      <Profile user={testUser} post={testPostItem} />
      <div>
        <p className="font-bold pb-1">{testPostItem.title}</p>
        <p className="text-sm">{testPostItem.content}</p>
      </div>
      <div className="flex gap-2">
        <div className="flex gap-1 items-center" onClick={() => setLike((prev) => !prev )}>
          {like ? <GoHeartFill color="#F86978" /> : <GoHeart color="#B8B8B8" />}
          <p className="text-xs text-gray-400">14</p>
        </div>
        <div className="flex gap-1 items-center">
          <IoChatbubbleOutline color="#B8B8B8" />
          <p className="text-xs text-gray-400">2</p>
        </div>
      </div>
    </div>
  );
}

