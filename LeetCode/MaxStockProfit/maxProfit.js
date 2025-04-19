function maxProfit(prices) {
    var minPrice = prices[0];
    var maxProfit = 0;
    for (var _i = 0, prices_1 = prices; _i < prices_1.length; _i++) {
        var price = prices_1[_i];
        if (price < minPrice) {
            minPrice = price;
        }
        else {
            maxProfit = Math.max(maxProfit, price - minPrice);
        }
    }
    return maxProfit;
}
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([1, 2]));
console.log(maxProfit([2, 4, 1]));
