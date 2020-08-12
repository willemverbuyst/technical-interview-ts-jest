// Split string
export const splitString = (str: string): string[] => str.split(' ');

// Split characters in string
export const splitCharacters = (str: string): string[] => str.split('');

// Reverse a string
// Solution 1
export const reverseString_1 = (str: string): string =>
  str.split('').reverse().join('');

// Solution 2 - Traversy Media
export const reverseString_2 = (str: string): string =>
  str.split('').reduce((reversedString, char) => char + reversedString, '');

// Validate palindrome - Traversy Media
export const isPalindrome_1 = (str: string): boolean =>
  str === str.split('').reduce((revString, char) => char + revString);

export const isPalindrome_2 = (str: string): boolean =>
  str === reverseString_1(str);
