import { Palindrome } from "../entities/palindrome.entity";

export interface PalindromeRepository {
  save(palindrome: Palindrome): Promise<void>;
  getHistory(): Promise<Palindrome[]>;
  deleteByIndex(index: number): Promise<void>;
}
