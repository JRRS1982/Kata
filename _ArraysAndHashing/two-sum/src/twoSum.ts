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

// Hash map solution (works with unsorted arrays)
export const twoSum = (nums: number[], target: number) => {
  const map = new Map<number, number>();

  for (let index = 0; index < nums.length; index++) {
    const difference = target - nums[index];

    if (map.has(difference)) {
      return [map.get(difference)!, index];
    }

    map.set(nums[index], index);
  }

  return null;
};
