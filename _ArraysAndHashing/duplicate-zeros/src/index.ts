/**
 * @param numbers i.e. [1,0,2,3,0,4,5,0]
 * @returns void
 * @description loop from end to start, if 0, duplicate it and remove last element, this keeps the array the same length and shifts the remaining elements to the right
 */
export const duplicateZeros = (numbers: number[]): void => {
  for (let index = numbers.length; index >= 0; index--) {
    if (numbers[index] === 0) {
      numbers.splice(index, 0, 0);
      numbers.pop();
    }
  }
};
