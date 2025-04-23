"use client";

import { usePalindrome } from "@/app/hooks/usePalindrome";
import PalindromeForm from "./PalindromeForm";
import PalindromeHistory from "./PalindromeHistory";
import ResultBox from "./ResultBox";

export default function PalindromeChecker() {
  const { result, history, submit, loading, error, removeItem } =
    usePalindrome();

  return (
    <div className="max-w-xl mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold text-center">Palindrome Checker</h1>

      <PalindromeForm onSubmit={submit} />

      {loading && <p className="text-blue-500">Checking...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {result && <ResultBox result={result} />}
      <PalindromeHistory history={history} onRemove={removeItem} />
    </div>
  );
}
