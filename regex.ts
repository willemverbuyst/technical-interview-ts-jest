// Return string in spinal case
export const changeToSpinalCase = (str: string): string =>
  str
    .split(/\s|_|(?=[A-Z])/g)
    .join('-')
    .toLowerCase();

// // Replace word in string, preserve capital
export const replaceWordInString = (
  str: string,
  before: string,
  after: string
): string => {
  const capitals = /[A-Z]/;
  return capitals.test(before[0])
    ? str.replace(before, after[0].toUpperCase() + after.slice(1))
    : str.replace(before, after);
};
