"use client";

import { PalindromeResult } from "@/app/types/palindrome";

interface Props {
  result: PalindromeResult;
}

export default function ResultBox({ result }: Props) {
  return (
    <div
      className={`p-4 border rounded ${
        result.isPalindrome
          ? "bg-green-100 border-green-300"
          : "bg-red-100 border-red-300"
      }`}
    >
      <p className="text-lg font-medium">"{result.text}"</p>
      <p className="text-sm">
        {result.isPalindrome ? "it's a palíndrome" : "it's not a palíndrome"}
      </p>
    </div>
  );
}
