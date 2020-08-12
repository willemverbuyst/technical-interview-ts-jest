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

// use function
export const isPalindrome_2 = (str: string): boolean =>
  str === reverseString_1(str);

// Find max characters - Traversy Media
export const findMaxCharacters = (str: string): string => {
  const charObj: { [key: string]: number } = {};
  str.split('').forEach((char) => (charObj[char] = (charObj[char] || 0) + 1));
  return Object.keys(charObj).reduce((a, b) =>
    charObj[a] > charObj[b] ? a : b
  );
};

// Find missing letter
export const findMissingLetter = (str: string): string => {
  const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const start = alpha.indexOf(str[0]);
  const end = alpha.indexOf(str[str.length - 1]);
  const [letter] = alpha
    .slice(start, end + 1)
    .filter((l) => str.indexOf(l) === -1);
  return letter;
};
