// input: unique sorted array of numbers
// output: the minimum value in the input
// constraint: you can't loop each element and return the minimum in O(n) time you need to O(logN) i.e. faster than a loop through each element.
const index = (nums: number[]) => {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    // find the mid point of the input
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] > nums[right]) {
      // Minimum is in the right half as mid is greater than the largest element in the right
      // So half the search - the left becomes the midpoint and the while loop searches
      left = mid + 1;
    } else {
      // Minimum is in the left half or at the mid index
      // So half the search - the right of the next iteration in the while loop becomes the mid point
      right = mid;
    }
  }

  // The loop exits when left === right, pointing to the minimum element
  return nums[left];
};

export default index;
