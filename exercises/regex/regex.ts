// Return string in spinal case
const changeToSpinalCase = (str: string): string =>
  str
    .split(/\s|_|(?=[A-Z])/g)
    .join('-')
    .toLowerCase();

// Replace word in string, preserve capital
const replaceWordInString = (
  str: string,
  before: string,
  after: string
): string => {
  const capitals = /[A-Z]/;
  return capitals.test(before[0])
    ? str.replace(before, after[0].toUpperCase() + after.slice(1))
    : str.replace(before, after);
};

// select only phone number that begin with a certain area code
const selectPhoneNumbersFromArray = (
  phoneNumbers: string[],
  areaCode: string
): string[] => {
  const regex = new RegExp(`${areaCode}-`);
  return phoneNumbers.filter((phoneNumber) => regex.test(phoneNumber));
};

const selectPhoneNumbersWithPattern = (
  phoneNumbers: string[],
  regex: RegExp
): string[] => {
  return phoneNumbers.filter((phoneNumber) => regex.test(phoneNumber));
};

export {
  changeToSpinalCase,
  replaceWordInString,
  selectPhoneNumbersFromArray,
  selectPhoneNumbersWithPattern,
};
