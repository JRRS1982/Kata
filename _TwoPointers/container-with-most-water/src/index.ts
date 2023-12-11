const index = (height: number[]) => {
  let leftIndex = 0;
  let rightIndex = height.length - 1;
  let maxArea = 0;

  // while right is still greater than left
  while (leftIndex < rightIndex) {
    const leftValue = height[leftIndex];
    const rightValue = height[rightIndex];
    const width = rightIndex - leftIndex;
    // use the smallest column to calculate area
    const area = Math.min(leftValue, rightValue) * width;
    // update maxArea
    maxArea = Math.max(maxArea, area);

    // narrow left
    if (leftValue < rightValue) {
      leftIndex++;
    } else {
      // narrow right
      rightIndex--;
    }
    // we have narrowed down the window and updated maxArea
  }

  return maxArea;
};

export default index;
