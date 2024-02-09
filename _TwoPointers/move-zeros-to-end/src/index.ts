function moveZeroes(nums: number[]): void {
  if (nums.length <= 1) {
    return;
  }
  // write numbers from the front
  let writePointer = 0;
  for (let readPointer = 0; readPointer < nums.length; readPointer++) {
    if (nums[readPointer] != 0) {
      nums[writePointer] = nums[readPointer];
      writePointer++;
    }
  }

  // write zeros from the end
  let zeros = nums.length - writePointer;
  for (let index = nums.length; zeros > 0; zeros--) {
    nums[index - zeros] = 0;
  }
}

export default moveZeroes;
