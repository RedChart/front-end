"use client";

import Button from "@/components/common/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CreatePostPage() {
  const router = useRouter();

  const handleCreateClick = () => {
    router.replace("/feed")
  };

  return (
    <div className="w-full h-full">
      <div className="flex justify-between items-end">
        <h1 className="font-bold text-2xl">새 글 작성</h1>
        <Link
          href="/"
          replace
          className="bg-white px-3 py-1 border border-solid border-gray-300 rounded-md text-sm hover:brightness-90"
        >
          목록
        </Link>
      </div>
      <div className="h-px bg-gray-300 my-6" />
      <form className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <label className="font-bold">제목</label>
          <input
            type="text"
            placeholder="제목을 입력해주세요."
            className="px-4 py-3 bg-white placeholder-gray-400 text-sm border border-gray-300 rounded"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-bold">내용</label>
          <textarea
            placeholder="내용을 입력해주세요."
            className="h-80 p-4 resize-none bg-white placeholder-gray-400 text-sm border border-gray-300 rounded"
          />
        </div>
      </form>
      <div className="flex mt-10 justify-center">
        <button
          className="px-5 py-2 bg-main text-white rounded-lg whitespace-nowrap hover:brightness-90"
          onClick={handleCreateClick}
        >
          완료
        </button>
      </div>
    </div>
  );
}
