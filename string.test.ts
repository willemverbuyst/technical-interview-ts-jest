import {
  splitString,
  splitCharacters,
  reverseString_1,
  reverseString_2,
  isPalindrome_1,
  isPalindrome_2,
  findMaxCharacters,
  findMissingLetter,
  capitalizeFirstLetters_1,
  capitalizeFirstLetters_2,
  areParenthesisBalanced,
} from './string';

const str = 'Vanilla JavaScript';
describe('splitString', () => {
  test('Vanilla JavaScript', () => {
    expect(splitString(str)).toEqual(['Vanilla', 'JavaScript']);
    expect(splitString(str)).toContain('Vanilla');
    expect(splitString(str)).not.toContain(str);
  });
});

describe('splitCharacters', () => {
  test('Vanilla JavaScript', () => {
    expect(splitCharacters(str)).toEqual([
      'V',
      'a',
      'n',
      'i',
      'l',
      'l',
      'a',
      ' ',
      'J',
      'a',
      'v',
      'a',
      'S',
      'c',
      'r',
      'i',
      'p',
      't',
    ]);
    expect(splitCharacters(str)).toContain('V');
    expect(splitCharacters(str)).not.toContain(str);
  });
});

describe('reverseString', () => {
  describe('reverseString_1', () => {
    test('Vanilla JavaScript', () => {
      expect(reverseString_1(str)).toBe('tpircSavaJ allinaV');
      expect(reverseString_1(str)).not.toBe('tpircsavaj allinav');
      expect(reverseString_1(str).length).toBe(str.length);
    });
  });

  describe('reverseString_2', () => {
    test('Vanilla JavaScript', () => {
      expect(reverseString_2(str)).toBe('tpircSavaJ allinaV');
      expect(reverseString_2(str)).not.toBe('tpircsavaj allinav');
      expect(reverseString_2(str).length).toBe(str.length);
    });
  });
});

describe('isPalindrome', () => {
  describe('isPalindrome_1', () => {
    test('racecar', () => {
      expect(isPalindrome_1('racecar')).toBe(true);
    });
    test('ferrari', () => {
      expect(isPalindrome_1('ferrari')).toBe(false);
    });
  });

  describe('isPalindrome_2', () => {
    test('racecar', () => {
      expect(isPalindrome_2('racecar')).toBe(true);
    });
    test('ferrari', () => {
      expect(isPalindrome_2('ferrari')).toBe(false);
    });
  });
});

describe('findMaxCharacters', () => {
  test('javascriptttt', () => {
    expect(findMaxCharacters('javascriptttt')).toBe('t');
    expect(findMaxCharacters('javascriptttt')).toBeDefined();
  });
  test('goooooood morning', () => {
    expect(findMaxCharacters('goooooood morning')).toBe('o');
    expect(findMaxCharacters('goooooood morning')).toBeDefined();
  });
});

describe('findMissingLetter', () => {
  test('abce', () => {
    expect(findMissingLetter('abce')).toBe('d');
  });
  test('ghijklmnpqrstu', () => {
    expect(findMissingLetter('ghijklmnpqrstu')).toBe('o');
  });
  test('abcd', () => {
    expect(findMissingLetter('abcd')).toBe(undefined);
  });
});

describe('capitalizeFirstLetters', () => {
  describe('capitalizeFirstLetters_1', () => {
    test('I love javascript', () => {
      expect(capitalizeFirstLetters_1('I love javascript')).toBe(
        'I Love Javascript'
      );
      expect(capitalizeFirstLetters_1('I love javascript')).toMatch(
        /I Love Javascript/
      );
    });
  });

  describe('capitalizeFirstLetters_2', () => {
    test('today is your lucky day', () => {
      expect(capitalizeFirstLetters_2('today is your lucky day')).toBe(
        'Today Is Your Lucky Day'
      );
      expect(capitalizeFirstLetters_2('today is your lucky day')).toMatch(
        /Today Is Your Lucky Day/
      );
    });
  });
});

describe('areParenthesisBalance', () => {
  test('[()]{}{[()()]()}', () => {
    expect(areParenthesisBalanced('[()]{}{[()()]()}')).toBe(true);
  });
  test('[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]', () => {
    expect(
      areParenthesisBalanced(
        '[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]'
      )
    ).toBe(true);
  });
  test('({(()))}}', () => {
    expect(areParenthesisBalanced('({(()))}}')).toBe(false);
  });
});
