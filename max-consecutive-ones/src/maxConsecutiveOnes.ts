export const maxConsecutiveOnes = (input: number[]): number => {
  let result: number = 0;
  for (let i = 0; i < input.length; i++) {
    let count: number = 0;

    if (i === 0 && input[i] === 1) {
      count++;
    }
    if (input.length <= 1) {
      return count;
    }

    for (let index = i + 1; index < input.length; index++) {
      if (input[index] === 1) {
        count++;
      }
      if (count > result) {
        result = count;
      }
      if (input[index] === 0) {
        count = 0;
      }
    }
  }
  return result;
};
