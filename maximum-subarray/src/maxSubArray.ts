/**
 * This took a while to understand what the question was asking, its asking for the largest sub array in the input. Think in terms of negatives, if the next element turns the current sub array negative then start a new subarray as the current subarray can't be made any larger. Its not a calculation of all the elements as it needs to be contigious - i.e. continuous.
 * 
 * You loop once and in that loop you loop to update the current index with the last index, the outer loop increments and inner loop drags behind, having to increment on more elements as the outer loop goes through them. The inner loop updates max if there are multiple elements in the sub array it has reached, else the outer loop will update max for the first element.
 * 
 * A double loop - with a dragging inner loop to track values - nums[i] updates as we travel left to right and the inner array uses this to find the max.
 */
export const maxSubArray = (nums: number[]): number => {
  // max is a floating value, the max sub array can be one element so set it as the first.
  let max = nums[0];

  // starting from index one
  for (let i = 1; i < nums.length; i++) {
    // left to right over the argument
    nums[i] += nums[i - 1];
    // update max
    max = Math.max(max, nums[i]); 
    // left to right inside... from start to current.
    for (let j = 1; j <= i; j++) {
      // sum of values in this sub array.. so its from j index to i where i index now has been updated
      let sum = nums[i] - nums[j - 1]; // the updated i index minus what its been updated with
      max = Math.max(max, sum); // update max
    }
  }

  return max;
};
