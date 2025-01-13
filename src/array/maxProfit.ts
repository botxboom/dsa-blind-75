// Buy and Sell stocks
function maximumProfit(prices: number[]): number {
  let minimum = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    let cost = prices[i] - minimum;
    maxProfit = maxProfit > cost ? maxProfit : cost;
    minimum = minimum < prices[i] ? minimum : prices[i];
  }

  return maxProfit;
}

export default maximumProfit;
