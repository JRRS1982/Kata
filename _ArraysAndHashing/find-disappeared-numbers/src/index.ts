// again not a quick or pretty solution, but it passes all the test cases.

const findDisappearedNumbers = (nums: number[]): number[] => {
  let result: number[] = [];
  let range = [...Array(nums.length + 1).keys()];
  range.shift();

  for (let i = 0; i < range.length; i++) {
    if (!nums.includes(range[i])) {
      result.push(range[i]);
    }
  }

  return result;
}

export default findDisappearedNumbers;