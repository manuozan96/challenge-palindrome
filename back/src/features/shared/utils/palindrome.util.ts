export function cleanText(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, "");
}

export function isPalindrome(text: string): boolean {
  const cleaned = text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[^a-z0-9áéíóúüñ]/g, "")
    .replace(/[^a-z0-9]/g, "");
  return cleaned === cleaned.split("").reverse().join("");
}
