const index = (numbers: number[], target: number) => {
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) {
      // if the sum is what we need return the value, accounting for zero index.
      return [left + 1, right + 1];
    }
    if (sum < target) {
      // as it is sorted and sum is less than we need we need a larger starting point
      left++;
    } else {
      // as sum is greater we need to try a smaller number on the right.
      right--;
    }
  }
  return [];
};

export default index;
