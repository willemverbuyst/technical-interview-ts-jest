import { getUniqueNumbers_1, getUniqueElements_2 } from './arrays';

describe('getUniqueNumbers', () => {
  describe('getUniqueNumbers_1', () => {
    test('[1, 2, 3, 4, 7] and [2, 3, 4, 5, 6]', () => {
      expect(getUniqueNumbers_1([1, 2, 3, 4, 7], [2, 3, 4, 5, 6])).toEqual([
        1,
        7,
        5,
        6,
      ]);
    });
    test('[2, 3, 4] and [2, 3, 4]', () => {
      expect(getUniqueNumbers_1([2, 3, 4], [2, 3, 4])).toEqual([]);
    });
  });
  describe('getUniqueNumbers_2', () => {
    test('[1, 2, 3, 4, 7] and [2, 3, 4, 5, 6]', () => {
      expect(getUniqueNumbers_1([1, 2, 3, 4, 7], [2, 3, 4, 5, 6])).toEqual([
        1,
        7,
        5,
        6,
      ]);
    });
    test('[2, 3, 4] and [2, 3, 4]', () => {
      expect(getUniqueNumbers_1([2, 3, 4], [2, 3, 4])).toEqual([]);
    });
  });
});
