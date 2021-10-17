const containsDuplicate = (nums: number[]) => {
  let set = new Set(nums);
  
  return set.size !== nums.length;
}

export default containsDuplicate;