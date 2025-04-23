export class Palindrome {
  constructor(
    public readonly text: string,
    public readonly isPalindrome: boolean,
    public readonly timestamp: Date = new Date()
  ) {}

}
