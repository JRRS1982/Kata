export const findNumbers = (numbers: number[]): number => {
  return numbers.filter(number => number.toString().length % 2 === 0).length;
}