export const removeElement = (nums: Array<number | null>, val: number): number => {
  const startLength = nums.length;
  for (let index = nums.length; index >= 0; index--) {
    if (nums[index] === val) {
      nums.splice(index, 1);
    }
  }
  const difference = startLength - nums.length;
  for (let i = 0; i < difference; i++) {
    nums.push(null);
  }
  return startLength - difference;
};
