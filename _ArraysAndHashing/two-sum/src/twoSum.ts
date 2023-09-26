// My hash map solution
export const twoSumMap = (nums: number[], target: number) => {
  // removing duplicates
  let map = new Map();

  for (let index = 0; index < nums.length; index++) {
    const difference = target - nums[index];

    // if the difference is in the map, return the solution
    if (map.has(difference)) {
      return [map.get(difference), index];
    }

    // else add the number to the map and continue
    map.set(nums[index], index);
  }
  // if no solution is found, return null
  return null;
};

// Two pointers solution
export const twoSum = (nums: number[], target: number) => {
  let left = 0;
  let right = nums.length - 1;

  // while left pointer is greater than right pointer
  while (left < right) {
    const sum = nums[left] + nums[right];

    // if the sum is equal to the target, return the solution
    if (sum === target) {
      return [left, right];
    }
    // if the sum is greater than the target, move the right pointer to the left to decrease the sum (the nums array is sorted)
    if (sum > target) {
      right--;
    } else {
      // if the sum is less than the target, move the left pointer to the right to increase the sum (the nums array is sorted)
      left++;
    }
  }

  return null;
};
