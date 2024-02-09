export const sortArrayByParity = (nums: number[]): number[] => {
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] % 2 === 0) {
      let element = nums.splice(index, 1);
      nums.unshift(element[0]);
    }
  }
  return nums;
};
