import { PalindromeResult } from "@/app/types/palindrome";

interface Props {
  item: PalindromeResult;
  onDelete: () => void;
}

export default function PalindromeItem({ item, onDelete }: Props) {
  return (
    <li className="flex justify-between items-center px-2 py-1 border-b text-sm">
      <span>{item.text}</span>
      <div className="flex items-center gap-2">
        <span>{item.isPalindrome ? "✅" : "❌"}</span>
        <button
          onClick={onDelete}
          className="text-red-500 hover:text-red-700 transition"
          title="Delete item"
        >
          🗑️
        </button>
      </div>
    </li>
  );
}
