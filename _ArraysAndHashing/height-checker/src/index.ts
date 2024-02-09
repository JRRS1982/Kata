const heightChecker = (heights: number[]) => {
  const ordered = heights.map(x => x).sort((a, b) => a - b);
  let count: number = 0;
  for (let index = 0; index < heights.length; index++) {
    if(ordered[index] !== heights[index]) {
      count++;
    }
  }
  
  return count;
}

export default heightChecker;