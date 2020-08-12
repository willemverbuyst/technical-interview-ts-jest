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

test('Split "Vanilla JavaScript"', () => {
  expect(splitString('Vanilla JavaScript')).toEqual(['Vanilla', 'JavaScript']);
});

test("splitCharacters 'Vanilla JavaScript'", () => {
  expect(splitCharacters('Vanilla JavaScript')).toEqual([
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
});

test('reverseString_1 "Vanilla JavaScript"', () => {
  expect(reverseString_1('Vanilla JavaScript')).toBe('tpircSavaJ allinaV');
  expect(reverseString_1('Vanilla JavaScript')).not.toBe('tpircsavaj allinav');
  expect(reverseString_1('Vanilla JavaScript').length).toBe(
    'Vanilla JavaScript'.length
  );
});

test('reverseString_2 "Vanilla JavaScript"', () => {
  expect(reverseString_2('Vanilla JavaScript')).toBe('tpircSavaJ allinaV');
  expect(reverseString_2('Vanilla JavaScript')).not.toBe('tpircsavaj allinav');
  expect(reverseString_2('Vanilla JavaScript').length).toBe(
    'Vanilla JavaScript'.length
  );
});

test('isPalindrome "racecar"', () => {
  expect(isPalindrome_1('racecar')).toBe(true);
});

test('isPalindrome "ferrari"', () => {
  expect(isPalindrome_1('ferrari')).toBe(false);
});

test('isPalindrome "racecar"', () => {
  expect(isPalindrome_2('racecar')).toBe(true);
});

test('isPalindrome "ferrari"', () => {
  expect(isPalindrome_2('ferrari')).toBe(false);
});

test('findMaxCharacters"javascriptttt"', () => {
  expect(findMaxCharacters('javascriptttt')).toBe('t');
});

test('findMaxCharacters "goooooood morning"', () => {
  expect(findMaxCharacters('goooooood morning')).toBe('o');
  expect(findMaxCharacters('goooooood morning')).toBeDefined();
});

test("findMissingLetter 'abce'", () => {
  expect(findMissingLetter('abce')).toBe('d');
});

test("findMissingLetter 'ghijklmnpqrstu'", () => {
  expect(findMissingLetter('ghijklmnpqrstu')).toBe('o');
});

test("findMissingLetter 'abcd'", () => {
  expect(findMissingLetter('abcd')).toBe(undefined);
});

test("capitalizeFirstLetters_1 'I love javascript'", () => {
  expect(capitalizeFirstLetters_1('I love javascript')).toBe(
    'I Love Javascript'
  );
});

test("capitalizeFirstLetters_2 'today is your lucky day'", () => {
  expect(capitalizeFirstLetters_2('today is your lucky day')).toBe(
    'Today Is Your Lucky Day'
  );
  expect(capitalizeFirstLetters_2('today is your lucky day')).toMatch(
    /Today Is Your Lucky Day/
  );
});

test("areParenthesisBalance '[()]{}{[()()]()}'", () => {
  expect(areParenthesisBalanced('[()]{}{[()()]()}')).toBe(true);
});

test("areParenthesisBalanced '[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]'", () => {
  expect(
    areParenthesisBalanced(
      '[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]'
    )
  ).toBe(true);
});

test("areParenthesisBalanced '({(()))}}'", () => {
  expect(areParenthesisBalanced('({(()))}}')).toBe(false);
});
