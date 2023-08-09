export const twoSum = (nums: number[], target: number) => {
  let map = new Map();

  for (let index = 0; index < nums.length; index++) {
    const difference = target - nums[index];

    if (map.has(difference)) {
      return [map.get(difference), index];
    }

    map.set(nums[index], index);
  }
  return null;
};
