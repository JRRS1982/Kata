export const findNumbers = (numbers: number[]): number => {
  // % 2 === 0 means the number of digits is even
  // .length returns the number of elements in the filtered array of even numbers
  return numbers.filter(number => number.toString().length % 2 === 0).length;
}