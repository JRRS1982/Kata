// not a nice solution, but it passes test cases, had issues with zero.


const thirdMax = (nums: number[]) => {
  let result: number = 0;
  let max: number = 0;
  let unique = Array.from(new Set(nums));
  unique.sort((a, b) => b - a);
 
  for (let index = 0; index < 3; index++) {
    if (unique[index] || unique[index] === 0) {
      result = unique[index];
      if (result > max) {
        max = result;
      }
    }
    if (!unique[index] && unique[index] !== 0) {
      return max;
    }
  }
  return result;
}

export default thirdMax;