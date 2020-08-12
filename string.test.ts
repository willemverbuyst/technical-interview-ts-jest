import {
  splitString,
  splitCharacters,
  reverseString_1,
  reverseString_2,
  isPalindrome_1,
  isPalindrome_2,
  findMaxCharacters,
  findMissingLetter,
} from './string';

test('Split "Vanilla JavaScript" results in ["Vanilla", "JavaScript"]', () => {
  expect(splitString('Vanilla JavaScript')).toEqual(['Vanilla', 'JavaScript']);
});

test("splitCharacters 'Vanilla JavaScript' returns ['V', 'a', 'n', 'i', 'l','l', 'a', ' ', 'J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']", () => {
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

test('reverseString_1 "Vanilla JavaScript" returns "tpircSavaJ allinaV"', () => {
  expect(reverseString_1('Vanilla JavaScript')).toBe('tpircSavaJ allinaV');
});

test('reverseString_2 "Vanilla JavaScript" returns "tpircSavaJ allinaV"', () => {
  expect(reverseString_2('Vanilla JavaScript')).toBe('tpircSavaJ allinaV');
});

test('reverseString_2 "Vanilla JavaScript" returns "tpircSavaJ allinaV"', () => {
  expect(reverseString_2('Vanilla JavaScript')).not.toBe('tpircsavaj allinav');
});

test('Length "Fiets" reverseString_2 "Fiets"', () => {
  expect(reverseString_2('Fiets').length).toBe('Fiets'.length);
});

test('isPalindrome "racecar" returns true', () => {
  expect(isPalindrome_1('racecar')).toBe(true);
});

test('isPalindrome "ferrari" returns false', () => {
  expect(isPalindrome_1('ferrari')).toBe(false);
});

test('isPalindrome "ferrari" returns false', () => {
  expect(isPalindrome_1('ferrari')).toBe(false);
});

test('isPalindrome "racecar" returns true', () => {
  expect(isPalindrome_2('racecar')).toBe(true);
});

test('isPalindrome "ferrari" returns false', () => {
  expect(isPalindrome_2('ferrari')).toBe(false);
});

test('isPalindrome "ferrari" returns false', () => {
  expect(isPalindrome_2('ferrari')).toBe(false);
});

test('findMaxCharacters("javascriptttt") returns t', () => {
  expect(findMaxCharacters('javascriptttt')).toBe('t');
});

test('findMaxCharacters("goooooood morning") returns o', () => {
  expect(findMaxCharacters('goooooood morning')).toBe('o');
});

test('findMaxCharacters() is defined', () => {
  expect(findMaxCharacters('goooooood morning')).toBeDefined();
});

test("findMissingLetter('abce') returns 'd'", () => {
  expect(findMissingLetter('abce')).toBe('d');
});

test("findMissingLetter('ghijklmnpqrstu') returns 'o'", () => {
  expect(findMissingLetter('ghijklmnpqrstu')).toBe('o');
});

test("findMissingLetter('abcd') returns undefined", () => {
  expect(findMissingLetter('abcd')).toBe(undefined);
});
