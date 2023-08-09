/**
 * checkIfExists
 * @param arr number[]
 * @returns boolean
 *
 * I think that this is O(n^2) because we have a nested loop, but I'm not sure. I think that the first loop is O(n) and the second loop is O(n) as well, but I'm not sure if that means that the overall time complexity is O(n^2) or O(n).
 *
 * I believe that this is an example of a sliding window algorithm.
 */
export const checkIfExists = (arr: number[]): boolean => {
  // iterate through the array
  for (let index = 0; index < arr.length; index++) {
    // iterate through the rest of the array from here
    for (let i = 0; i < arr.length; i++) {
      // ensure we're not comparing the same index
      if (index !== i) {
        // if the value of the element at index is double that at i
        if (arr[index] === 2 * arr[i]) {
          return true;
        }
      }
    }
  }
  return false;
};
