export class CheckPalindromeDto {
  constructor(public readonly text: string) {}

  static create(body: any): [string?, CheckPalindromeDto?] {
    if (!body.text) return ["Text is required"];
    return [undefined, new CheckPalindromeDto(body.text)];
  }
}
