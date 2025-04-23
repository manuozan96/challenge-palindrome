"use client";

import { PalindromeResult } from "@/app/types/palindrome";
import PalindromeItem from "./PalindromeItem";

interface Props {
  history: PalindromeResult[];
  onRemove: (index: number) => void;
}

export default function PalindromeHistory({ history, onRemove }: Props) {
  if (!history.length) return null;

  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold mb-2">History</h2>
      <ul className="border rounded divide-y">
        {history.map((item, idx) => (
          <PalindromeItem
            key={idx}
            item={item}
            onDelete={() => onRemove(idx)}
          />
        ))}
      </ul>
    </div>
  );
}
