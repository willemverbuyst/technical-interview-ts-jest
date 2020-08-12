import { sumAll } from './numbers';

test('sumAll([1, 5]) returns 15', () => {
  expect(sumAll([1, 5])).toBe(15);
});

test('sumAll([1, 5]) greater than 6', () => {
  expect(sumAll([1, 5])).toBeGreaterThanOrEqual(6);
});

test('sumAll([1, 2]) equal to 3', () => {
  expect(sumAll([1, 2])).toBe(3);
});
