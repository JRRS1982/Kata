const parentensesMap: Record<string, string> = {
  ")": "(",
  "]": "[",
  "}": "{",
};

const validParentheses = (str: string): boolean => {
  let isValid = true;
  let openParentheses = [];

  // Loop through the string
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    // If the char is an open parentheses, push it to the stack
    if (char === "(" || char === "[" || char === "{") {
      openParentheses.push(char);
    } else if (
      // If the char is a close parentheses, pop the last open parentheses from the stack
      parentensesMap[char] === openParentheses[openParentheses.length - 1]
    ) {
      openParentheses.pop();
    } else if (str.length === 1) {
      // If the stack is empty, return false
      isValid = false;
      break;
    } else {
      // If the char is a close parentheses and the last open parentheses from the stack is not the same type, return false
      isValid = false;
      break;
    }
  }

  // if there are any open parentheses left in the stack, return false
  if (openParentheses.length > 0) {
    isValid = false;
  }

  return isValid;
};

export default validParentheses;
