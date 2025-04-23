import axios from "axios";
import { PalindromeResult } from "@/app/types/palindrome";

const api = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
  },
});

export const checkPalindrome = async (
  text: string
): Promise<PalindromeResult> => {
  const res = await api.post<PalindromeResult>("/palindrome/check", { text });
  return res.data;
};

export const getHistory = async (): Promise<PalindromeResult[]> => {
  const res = await api.get<PalindromeResult[]>("/palindrome/history");
  return res.data;
};

export const deleteItem = async (index: number): Promise<void> => {
  await api.delete(`/palindrome/history/${index}`);
};
