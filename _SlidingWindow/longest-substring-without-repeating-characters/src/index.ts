/**
 * lengthOfLongestSubstring
 * @param s: string
 * @returns number
 *
 * I think that this is a sliding window problem.
 *
 *
 */
const lengthOfLongestSubstring = (s: string) => {
  // track the max length
  // start a loop
  // create a substring from this sliding point
  // calculate max, to cover when there is only one character
  // start a sub loop
  // and check if that character is in the substring, then break out of the loop and move the window to the right
  // if next character is not in the current substring then add it to the substring and update the max
  // then move the tail of the substring to the right
  // return max length
  let max = 0;
  for (let index = 0; index < s.length; index++) {
    let substring = s[index]; // start the substring with the first letter of the sliding window
    max = Math.max(max, substring.length);
    for (let j = index + 1; j < s.length; j++) {
      // for the next letter of the sliding window
      const nextLetter = s[j];
      if (substring.includes(nextLetter)) {
        break; // break out of the inner loop, which will increment the outer loop and start a new substring
      }
      substring += nextLetter;
      max = Math.max(max, substring.length);
    }
  }
  return max;
};

export default lengthOfLongestSubstring;
