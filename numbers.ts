// Sum all numbers in a range
export const sumAll = (arr: number[]): number => {
  let total = 0;
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  for (let i = min; i <= max; i++) {
    total += i;
  }
  return total;
};

// Reverse number - Traversy Media
export const reverseNumber = (num: number): number =>
  parseInt(num.toString().split('').reverse().join('')) * Math.sign(num);
