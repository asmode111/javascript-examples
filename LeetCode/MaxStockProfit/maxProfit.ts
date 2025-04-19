function maxProfit(prices: number[]): number {
  let minPrice: number = Infinity;
  let maxProfit: number = 0;

  for (const price of prices) {
    if (price < minPrice) {
      minPrice = price;
    } else {
      maxProfit = Math.max(maxProfit, price - minPrice);
    }
  }

  return maxProfit;
}

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,6,4,3,1]));
console.log(maxProfit([1,2]));
console.log(maxProfit([2,4,1]));