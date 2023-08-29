/**
 * Given an array of numbers, find the top k frequent elements.
 *
 * @param params i.e. [1,2,3,1,2,1], k = 2
 * @returns {number[]} i.e. [1,2]
 */
function topKFrequent(nums: number[], k: number): number[] {
  // loop over nums
  // create a map of the frequency of each number
  // sort the map by the frequency
  // return the top k elements
  const map: { [key: number]: number } = {};
  nums.forEach((num) => {
    if (map[num]) {
      map[num] += 1;
    } else {
      map[num] = 1;
    }
  });

  return Object.entries(map)
    .sort((a, b) => a[1] - b[1]) // sort by the frequency
    .map((num) => Number(num[0])) // return as a number
    .slice(-k); // select top k elements
}

export default topKFrequent;
