export const sortedSquares = (arr: number[]): number[] => {
  // square each number in the array
  // sort the array
  return arr.map(num => num * num).sort((a, b) => a - b);
}