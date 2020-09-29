import {
  changeToSpinalCase,
  replaceWordInString,
  selectPhoneNumbersFromArray,
} from './regex';

describe('changeToSpinalCase', () => {
  test('is defined', () => {
    expect(changeToSpinalCase('hello')).toBeDefined();
  });

  test("Let's_get_things_done", () => {
    expect(changeToSpinalCase("Let's_get_things_done")).toBe(
      "let's-get-things-done"
    );
  });
});

describe('replaceWordInString', () => {
  test('A quick brown fox jumped over the lazy dog, jumped, leaped', () => {
    expect(
      replaceWordInString(
        'A quick brown fox jumped over the lazy dog',
        'jumped',
        'leaped'
      )
    ).toBe('A quick brown fox leaped over the lazy dog');
  });

  test('Today I will learn regular expressions, Today,Tomorrow', () => {
    expect(
      replaceWordInString(
        'Today I will learn regular expressions',
        'Today',
        'Tomorrow'
      )
    ).toBe('Tomorrow I will learn regular expressions');
  });

  test('Today I will learn regular expressions, Today,Tomorrow', () => {
    expect(
      replaceWordInString(
        'Today I will learn regular expressions',
        'Today',
        'Tomorrow'
      )
    ).not.toBe('Today I will learn regular expressions');
  });
});

describe('#selectPhoneNumbersFromArray', () => {
  test('phone numbers with area code 013', () => {
    expect(
      selectPhoneNumbersFromArray(
        ['013-4563456', '013-0980998', '011-0987654'],
        '013'
      )
    ).toEqual(['013-4563456', '013-0980998']);
  });
});
