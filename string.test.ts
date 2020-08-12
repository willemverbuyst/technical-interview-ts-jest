import { splitString, splitCharacters } from './string';

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
