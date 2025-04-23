import { useState, useEffect } from "react";
import { PalindromeResult } from "../types/palindrome";
import { checkPalindrome, deleteItem, getHistory } from "../api";

export const usePalindrome = () => {
  const [result, setResult] = useState<PalindromeResult | null>(null);
  const [history, setHistory] = useState<PalindromeResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchHistory = async () => {
    try {
      const data = await getHistory();
      setHistory(data);
    } catch {
      setError("Failed to load history");
    }
  };

  const submit = async (text: string) => {
    try {
      setLoading(true);
      setError(null);
      const res = await checkPalindrome(text);
      setResult(res);
      await fetchHistory();
    } catch {
      setError("An error occurred while checking the palindrome");
    } finally {
      setLoading(false);
    }
  };

  const removeItem = async (index: number) => {
    try {
      setError(null);
      await deleteItem(index);
      await fetchHistory();
    } catch {
      setError("Error deleting item");
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  return {
    result,
    history,
    loading,
    error,
    submit,
    removeItem,
  };
};
