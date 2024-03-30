/**
Binary search kata https://leetcode.com/problems/search-in-rotated-sorted-array/description/
As the nums array is sorted you can half the array until you find the target
 */
function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  // while there are elements to compare
  while (left <= right) {
    // find the mid point
    let mid = Math.floor((left + right) / 2);

    // if the mid point is the target return it = THE END
    if (nums[mid] === target) {
      return mid;
    }

    // else where is the target?
    if (nums[left] <= nums[mid]) {
      // Left half is sorted
      if (nums[left] <= target && target < nums[mid]) {
        // Target is in the left half
        right = mid - 1;
      } else {
        // Target is in the right half
        left = mid + 1;
      }
    } else {
      // Right half is sorted
      if (nums[mid] < target && target <= nums[right]) {
        // Target is in the right half
        left = mid + 1;
      } else {
        // Target is in the left half
        right = mid - 1;
      }
    }
  }

  return -1; // Target not found
}
