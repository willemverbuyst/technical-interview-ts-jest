import { sumAll, reverseNumber, fizzBuzz } from './numbers';

test('Sum all number between (including) 1 and 5', () => {
  expect(sumAll([1, 5])).toBe(15);
  expect(sumAll([1, 5])).toBeGreaterThanOrEqual(6);
});

test('Sum all number between (including) 1 and 2]', () => {
  expect(sumAll([1, 2])).toBe(3);
  expect(sumAll([1, 2])).toBeGreaterThanOrEqual(3);
});

test('reverse number 3456', () => {
  expect(reverseNumber(3456)).toBe(6543);
});

test('reverse number 321', () => {
  expect(reverseNumber(321)).toBe(123);
});

test('fizzBuzz(15) ', () => {
  expect(fizzBuzz(15)).toEqual([
    1,
    2,
    'Fizz',
    4,
    'Buzz',
    'Fizz',
    7,
    8,
    'Fizz',
    'Buzz',
    11,
    'Fizz',
    13,
    14,
    'FizzBuzz',
  ]);
  expect(fizzBuzz(15)).toHaveLength(15);
  expect(fizzBuzz(15)).toEqual(expect.not.arrayContaining([16, 17]));
  expect(fizzBuzz(15)).toEqual(
    expect.arrayContaining([1, 2, 'Fizz', 'Buzz', 'FizzBuzz'])
  );
});
