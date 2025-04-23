import { cleanText } from "../../shared/utils/palindrome.util";
import { Palindrome } from "../entities/palindrome.entity";
import { PalindromeRepository } from "../repositories/palindrome.repository";

export class PalindromeService {
  constructor(private readonly repository: PalindromeRepository) {}

  private create(text: string): Palindrome {
    const cleanedText = cleanText(text);
    const reversedText = cleanedText.split("").reverse().join("");
    const isPalindrome = cleanedText === reversedText;

    return new Palindrome(text, isPalindrome);
  }

  async checkPalindrome(text: string): Promise<Palindrome> {
    const palindrome = this.create(text);
    await this.repository.save(palindrome);
    return palindrome;
  }

  async getHistory(): Promise<Palindrome[]> {
    return this.repository.getHistory();
  }

  async deleteItem(index: number): Promise<void> {
    await this.repository.deleteByIndex(index);
  }
}
