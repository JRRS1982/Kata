const maxProfit = (prices: number[]): number => {
  if (prices.length <= 1) return 0;
  let maxProfit = 0;
  let minPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) { // the next index is greater
      maxProfit = Math.max(maxProfit, prices[i] - minPrice); // set maxProfit as the diff
    } else {
      minPrice = Math.min(minPrice, prices[i]); // reset the min price... and onto the next to see if its higher
    }
  }
  return maxProfit;
};

export default maxProfit;
