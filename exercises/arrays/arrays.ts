// Get unique elements from two arrays
// Solution 1
export const getUniqueNumbers_1 = (arr1: number[], arr2: number[]): number[] =>
  [...arr1, ...arr2].filter(
    (element) => arr1.indexOf(element) === -1 || arr2.indexOf(element) === -1
  );

// Solution 2
export const getUniqueNumbers_2 = (arr1: number[], arr2: number[]): number[] =>
  [...arr1, ...arr2].filter(
    (element) => !arr1.includes(element) || !arr2.includes(element)
  );

// Remove elements from array
export const removeElements = (arr: number[], ...args: number[]): number[] => {
  return arr.filter((el) => !args.includes(el));
};

// Unite arrays without duplicates
export const uniteUniqueElements = (...args: any[]) => [
  ...new Set(args.flat()),
];

// Pair DNA - freeCodeCamp
export const pairDNA = (str: string): string[][] => {
  const DNApairs: { [key: string]: string } = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
  };
  return str.split('').map((l) => [l, DNApairs[l]]);
};

// Sort an array of objects, by value
interface Person {
  name: string;
  age: number;
  friends: number;
}
export const sortPersons = (arr: Person[], key: 'age' | 'friends') =>
  arr.sort((a, b) => a[key] - b[key]);
