import {
  getUniqueNumbers_1,
  getUniqueNumbers_2,
  removeElements,
  uniteUniqueElements,
  pairDNA,
  sortPersons,
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

describe('pairDNA', () => {
  test('CTCTA', () => {
    const DNA = 'CTCTA';
    const dnaPair = [
      ['C', 'G'],
      ['T', 'A'],
      ['C', 'G'],
      ['T', 'A'],
      ['A', 'T'],
    ];
    expect(pairDNA(DNA)).toEqual(dnaPair);
    expect(pairDNA(DNA).length).toBe(dnaPair.length);
  });
});

describe('sortPersons', () => {
  test('(persons, "age") sorts object by age-property', () => {
    const persons = [
      {
        name: 'Jack',
        age: 23,
        friends: 2,
      },
      {
        name: 'Sifan',
        age: 4,
        friends: 5,
      },
      {
        name: 'Hilary',
        age: 104,
        friends: 1,
      },
    ];
    expect(sortPersons(persons, 'age')).toEqual([
      { name: 'Sifan', age: 4, friends: 5 },
      { name: 'Jack', age: 23, friends: 2 },
      { name: 'Hilary', age: 104, friends: 1 },
    ]);
  });
});
