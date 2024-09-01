"use client";

import { useEffect, useState } from "react";
import { userAxiosInstance } from "../api/axios";
import { useRouter } from "next/navigation";

export default function OAuth() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const code = new URL(window.location.href).searchParams.get("code");

  const kakaoApi = async () => {
    setLoading(true);
    try {
      const response = await userAxiosInstance.post(
        `/api/users/kakao?code=${code}`
      );
      if (response.status === 200) {
        console.log(response);
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    kakaoApi();
  });

  return <div>oauth page</div>;
}
