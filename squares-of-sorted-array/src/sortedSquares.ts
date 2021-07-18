export const sortedSquares = (arr: number[]): number[] => {
  return arr.map(num => num * num).sort((a, b) => a - b);
}