const isAlphaNumeric = (s: string) => {
  return /[a-zA-Z0-9]/.test(s);
};

/**
 * isPalindrome
 *
 * Two pointers, left and right, start at the beginning and end of the string and while the right pointer is greater than or equal to the left pointer, check if the left and right pointers are alphanumeric. If they are not, move the pointer inwards. If they are, check if the characters are equal. If they are, move the pointers inwards. If they are not, return false. If the loop completes, return true else return false..
 */
const isPalindrome = (s: string) => {
  let left = 0;
  let right = s.length - 1;
  // with two pointers, as long as the right pointer is greater than left
  while (left <= right) {
    // validate left
    if (!isAlphaNumeric(s[left]) && left < right) {
      // if not a value we check try the next letter
      left++;
      continue;
    }
    if (!isAlphaNumeric(s[right]) && left < right) {
      right--;
      continue;
    }

    // if the letters are equal try the next letter left and right (closer together)
    if (s[left].toLowerCase() === s[right].toLowerCase()) {
      left++;
      right--;
    } else {
      // as we have validated if they are not equal its not a palindrome.
      return false;
    }
  }
  // if we get to the end then we have checked the string and its valid so return true
  return true;
};

export default isPalindrome;
