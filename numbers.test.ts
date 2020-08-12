import { sumAll } from './numbers';

test('Sum all number between (including) 1 and 5', () => {
  expect(sumAll([1, 5])).toBe(15);
  expect(sumAll([1, 5])).toBeGreaterThanOrEqual(6);
});

test('Sum all number between (including) 1 and 2]', () => {
  expect(sumAll([1, 2])).toBe(3);
  expect(sumAll([1, 2])).toBeGreaterThanOrEqual(3);
});
