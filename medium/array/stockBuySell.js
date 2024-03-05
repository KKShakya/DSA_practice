// link=>https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

//brute 
var maxProfit = function (prices) {
  let maxProfit = 0;
  let n = prices.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (prices[j] > prices[i]) {
        let profit = prices[j] - prices[i];
        maxProfit = Math.max(maxProfit, profit)
      }
    }
  }
  return maxProfit;
};

//optimal
// visit every elemnet mainitaing the minimum from left to right 
// and if somethign is greater than the minimum count maxProfit a candidate

var maxProfitOptimal = function (prices) {
  let maxProfit = 0;
  let n = prices.length;
  let min = prices[0];
  for (let i = 1; i < n; i++) {
    if (prices[i] > min) {
      maxProfit = Math.max(maxProfit, prices[i] - min);
    } else if (prices[i] <= min) {
      min = prices[i]
    }
  }

  return maxProfit
};


const pricecs=[7,1,4,6,5];
const prices2 = [7,6,4,3,1];

console.log(maxProfit(pricecs))
console.log(maxProfitOptimal(pricecs))
console.log(maxProfit(prices2))
console.log(maxProfitOptimal(prices2))