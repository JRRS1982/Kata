/**
 * Binary Search
 * https://leetcode.com/problems/binary-search/description/
 *
 * Given a sorted (in ascending order) integer array nums of n elements and a target value, write a function to search target in nums.
 */
function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    // find the mid point
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      // have we found the target? THE END - return the index
      return mid;
    }

    // where is the target
    if (nums[mid] > target) {
      // in the left half
      right = mid - 1;
    } else {
      // in the right
      left = mid + 1;
    }
  }

  // target not found
  return -1;
}
