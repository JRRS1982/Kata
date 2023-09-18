const longestConsecutive = (nums: number[]): number => {
  let longest = 0;
  const set = new Set(nums); // unique the array

  for (const num of nums) {
    if (!set.has(num - 1)) { // prior value missing?
      let length = 0;
      while (set.has(num + length)) { // next value present?
        length++; // increment this window
      }
      longest = Math.max(length, longest); // assess the max
    }
  }
  return longest;
};

export default longestConsecutive;
