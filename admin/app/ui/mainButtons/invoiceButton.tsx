"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function InvoiceButton() {
  const router = useRouter();

  const handleInvoiceClick = () => {
    const token = localStorage.getItem("token");

    if (token) {
      router.push("/invoice");
    } else {
      alert("로그인이 필요합니다.");
    }
  };

  return (
    <button
    className="flex justify-center items-center bg-gray-300 w-32 h-20 rounded-md text-lg transition duration-300 ease-in-out hover:bg-gray-400 mb-5"
      onClick={handleInvoiceClick}
    >
      주문조회
    </button>
  );
}