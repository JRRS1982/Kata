/**
 * threeSum
 * @param nums {number[]}
 * @returns {number[][]}
 * @description Using a two pointer to find all triplets in the array which gives the sum of zero. Iterate through a sorted array to find the two other elements that would make the sum of zero.
 *
 * Time complexity: O(n^2) as the outer loop runs for n times and the inner loop runs for n times so n^2
 */
const index = (nums: number[]) => {
  // sort the nums array
  nums.sort((a, b) => a - b);

  // create a result array
  let result: number[][] = [];

  // iterate through the nums array
  for (let index = 0; index < nums.length; index++) {
    // if the current number is equal to the previous number, skip it
    if (index > 0 && nums[index] === nums[index - 1]) {
      continue;
    }

    // create two pointers
    let left = index + 1;
    let right = nums.length - 1;

    // while left pointer is greater than right pointer
    while (left < right) {
      const sum = nums[index] + nums[left] + nums[right];

      // if the sum is equal to 0, add the solution to the result array
      if (sum === 0) {
        result.push([nums[index], nums[left], nums[right]]);

        // skip all the duplicates on the left
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }

        // skip all the duplicates on the right
        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }

        // move the actual pointers
        left++;
        right--;
      } else if (sum > 0) {
        // if the sum is greater than 0, move the right pointer to the left to decrease the sum (the nums array is sorted)
        right--;
      } else {
        // if the sum is less than 0, move the left pointer to the right to increase the sum (the nums array is sorted)
        left++;
      }
    }
  }

  return result;
};

export default index;
