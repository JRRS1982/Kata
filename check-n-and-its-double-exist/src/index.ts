export const checkIfExists = (arr: number[]): boolean => {
  for (let index = 0; index < arr.length; index++) {
    for (let i = 0; i < arr.length; i++) {
      if (index !== i) { // if not the same index
        if (arr[index] === 2 * arr[i]) { // and the value of the element at i is double that at index
          return true;
        }
      }
    }
  }
  return false;
};
