/**
 * Loop from left to right to create one increasing array, and right to left to create one array which will be increasing, but in reverse order and work out the
 *
 * Had to look this one up and try it a couple of times, nice walk through here https://www.youtube.com/watch?v=7RTYCL-h_NY
 */
export const productExceptSelf = (nums: number[]) => {
  // we loop left to right, but that doesn't include first element, so fill with that
  let result: number[] = Array(nums.length).fill(nums[0]);

  // cache is a floating value - later we loop right to left, so start with the value of right element
  let cache: number = nums[nums.length - 1];

  // left to right - store on the results array.
  for (let i = 1; i < nums.length; i++) {
    result[i] = result[i - 1] * nums[i];
  }

  // right to left - first element on the right
  result[nums.length - 1] = result[result.length - 2];

  // right to left - decrement to set result as left value * cache - which starts as first right value
  for (let j = nums.length - 2; j > 0; j--) {
    result[j] = result[j - 1] * cache;
    // cache is updated to do the right to left side of this calculation i.e. next decrement = num * cache where cache is going to act as the reducer and increment with the values its multiplied with
    cache = cache * nums[j];
  }

  // set the last value of the result array
  result[0] = cache;

  // convert -0 to 0 to avoid test failures
  return result.map((val) => (val === 0 ? 0 : val));
};

/**
 * This is my original attempt, i would probably work a solution with with the reduce function in a real world situation as that is what this sort of helper function was designed for and its quite a bit simpler to understand than the above.
 */

// export const productExceptSelf = (nums: number[]): number[] => {
//   const result: number[] = [];

//   nums.forEach((_, index) => {
//     result[index] = nums.reduce((prev, curr, currIndex) => {
//       if (index != currIndex) {
//         return prev *= curr;
//       }
//       return prev;
//     });
//   });

//   return result;
// };
