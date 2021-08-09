function replaceElements(arr: number[]) {
  if (arr.length > 1) {
    for (let index = 0; index <= arr.length - 1; index++) {
      let tempArray = arr.slice(index + 1, arr.length); // from here to end of arr decrementing in size
      arr[index] = Math.max(...tempArray); // replacing this index with the max in tempArray
    }
  }
  arr.splice(-1, 1, -1); // last character is now -1
  return arr;
}

export default replaceElements;
