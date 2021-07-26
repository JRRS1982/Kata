export const removeDuplicates = (numbers: Array<number | null>): number => {
  let startLength = numbers.length;
  let tempUnique: Array<number | null> = [];

  for (let index = numbers.length - 1; index >= 0; index--) {
    if (tempUnique.includes(numbers[index])) {
      numbers.splice(index, 1);
    }
    if (!tempUnique.includes(numbers[index])) {
      tempUnique.push(numbers[index]);
    }
  }

  const difference = startLength - numbers.length;
  for (let i = 0; i < difference; i++) {
    numbers.push(null);
  }

  return startLength - difference;
};
