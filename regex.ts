// Return string in spinal case
export const changeToSpinalCase = (str: string): string =>
  str
    .split(/\s|_|(?=[A-Z])/g)
    .join('-')
    .toLowerCase();
