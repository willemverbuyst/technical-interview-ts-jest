import { splitString } from './string';

test('Split "Vanilla JavaScript" results in ["Vanilla", "JavaScript"]', () => {
  expect(splitString('Vanilla JavaScript')).toEqual(['Vanilla', 'JavaScript']);
});
