import { changeToSpinalCase } from './regex';

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
