/**
 * @param nums i.e. [4,3,2,7,8,2,3,1]
 * @returns i.e. [5,6]
 * @description returns an array of all the numbers in the range [1, n] that do not appear in nums, where n is the length of the array
 * @time O(n2) - as there is a nested loop i.e. the includes method
 */
const findDisappearedNumbersBasic = (nums: number[]): number[] => {
  let result: number[] = [];
  let range = [...Array(nums.length + 1).keys()];
  range.shift();

  for (let i = 0; i < range.length; i++) {
    if (!nums.includes(range[i])) {
      result.push(range[i]);
    }
  }

  return result;
}

/**
 * @description same as the other method, but uses a different approach
 * @time O(n) - no nested loop
 */
const findDisappearedNumbersBetter = (nums: number[]): number[] => {
  const result: number[] = [];
  const numsCopy = [...nums]; // Create a shallow copy of the input array

  // Mark existing numbers by making their corresponding indices negative
  for (const num of nums) {
    const index = Math.abs(num) - 1;
    if (numsCopy[index] > 0) {
      numsCopy[index] = -numsCopy[index];
    }
  }

  // Find indices that are still positive (1-based)
  for (let i = 0; i < numsCopy.length; i++) {
    if (numsCopy[i] > 0) {
      result.push(i + 1);
    }
  }

  return result;
};

export { findDisappearedNumbersBasic, findDisappearedNumbersBetter };