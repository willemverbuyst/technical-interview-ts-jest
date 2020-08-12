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
