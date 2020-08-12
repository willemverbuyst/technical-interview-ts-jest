// Split string
export const splitString = (str: string): string[] => str.split(' ');

// Split characters in string
export const splitCharacters = (str: string): string[] => str.split('');

// Reverse a string
// Solution 1
export const reverseString_1 = (str: string): string =>
  str.split('').reverse().join('');
