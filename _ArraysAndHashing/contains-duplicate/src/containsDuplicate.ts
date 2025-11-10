/**
 * @param nums i.e. [1,2,3,1]
 * @returns boolean i.e. true
 * @description TLDR Set will remove duplicates, so if the size of the set is not equal to the length of the array, then there are duplicates.
 */
const containsDuplicate = (nums: number[]) => {
  let set = new Set(nums);

  return set.size !== nums.length;
}

export default containsDuplicate;