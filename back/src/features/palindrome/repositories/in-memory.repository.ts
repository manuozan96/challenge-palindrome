import { Palindrome } from "../entities/palindrome.entity";
import { PalindromeRepository } from "./palindrome.repository";

export class InMemorPalindromeRepository implements PalindromeRepository {
  private history: Palindrome[] = [];

  async save(palindrome: Palindrome): Promise<void> {
    this.history.push(palindrome);
  }

  async getHistory(): Promise<Palindrome[]> {
    return [...this.history];
  }
  async deleteByIndex(index: number): Promise<void> {
    if (index >= 0 && index < this.history.length) {
      this.history.splice(index, 1);
    }
  }
}
