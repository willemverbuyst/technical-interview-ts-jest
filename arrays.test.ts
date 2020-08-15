import {
  getUniqueNumbers_1,
  getUniqueNumbers_2,
  removeElements,
  uniteUniqueElements,
} from './arrays';

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
      expect(getUniqueNumbers_2([1, 2, 3, 4, 7], [2, 3, 4, 5, 6])).toEqual([
        1,
        7,
        5,
        6,
      ]);
    });
    test('[2, 3, 4] and [2, 3, 4]', () => {
      expect(getUniqueNumbers_2([2, 3, 4], [2, 3, 4])).toEqual([]);
    });
  });
});

describe('removeElements', () => {
  test('removeElements([1, 2, 3, 4, 1, 2, 5, 3, 1, 4], 3, 4))', () => {
    const excluded = [3, 4];
    expect(removeElements([1, 2, 3, 4, 1, 2, 5, 3, 1, 4], 3, 4)).toEqual(
      expect.not.arrayContaining(excluded)
    );
    expect(removeElements([1, 2, 3, 4, 1, 2, 5, 3, 1, 4], 3, 4)).toHaveLength(
      6
    );
  });
});

describe('uniteUniqueElements', () => {
  test('[1, 3, "two"], [5, "two", 1, 4], ["two", 1]', () => {
    expect(
      uniteUniqueElements([1, 3, 'two'], [5, 'two', 1, 4], ['two', 1])
    ).toEqual([1, 3, 'two', 5, 4]);
  });
});
