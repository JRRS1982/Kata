export const palindromeNumber = (number: number): boolean => {
  // if negative return false
  if (Math.sign(number) === -1) {
    return false;
  }
  const original = digits(number);
  const reversed = [...original].reverse();

  return equals(original, reversed);
};

const equals = (a: number[], b: number[]): boolean =>
  a.length === b.length && a.every((v, i) => v === b[i]);

/**
 * digits() will convert a number to an array of numbers without converting to a string
 *
 * Given n = 1234,
 * n % 10 will return first (right-moist) digit, 4
 * n / 10 will return 123 with some remainder
 * Using Math.floor we can chop the remainder off
 * Repeating these steps, we can form the entire result
 * Credit: https://stackoverflow.com/a/54712842/11561000
 */
const digits = (n: number = 0): number[] =>
  n < 10 ? [n] : [...digits(Math.floor(n / 10)), n % 10];
