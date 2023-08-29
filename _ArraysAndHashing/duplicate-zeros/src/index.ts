export const duplicateZeros = (numbers: number[]): void => {
  for (let index = numbers.length; index >= 0; index--) {
    if (numbers[index] === 0) {
      numbers.splice(index, 0, 0);
      numbers.pop();
    }
  }
};
