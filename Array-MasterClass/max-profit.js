// My Solution
function maxProfit(prices) {
  let lowestPrice = 0
  let maxProfit = 0
  let price = 0
  for (let i = 0; i < prices.length; i++) {
    const currentPrice = prices[i]
    if (currentPrice < lowestPrice || lowestPrice === 0) {
      lowestPrice = currentPrice
    }
    const currentProfit = currentPrice - lowestPrice
    console.log(
      `CurrentProfit ${currentProfit} = ${currentPrice} - ${lowestPrice}`
    )
    if (currentProfit > maxProfit) {
      maxProfit = currentProfit
      price = prices[i]
    }
  }
  console.log(
    `We buy the stock for $${lowestPrice} as it is the lowest price. We sell it for $${price} and we profited $${maxProfit}`
  )
}

maxProfit([7, 1, 2, 4, 5, 3])

/**
 *  TODO: buy the lowest priced stock, and sell it for the highest profit for the next days
 */

// Instructor Solution
const maxProfitInstructor = prices => {
  let minPrice = prices[0]
  let maxProfit = 0

  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i]
    minPrice = Math.min(minPrice, currentPrice)
    const potentialProfit = currentPrice - minPrice
    maxProfit = Math.max(maxProfit, potentialProfit)
  }
  console.log(maxProfit)
}

maxProfitInstructor([7, 1, 2, 4, 5, 3])
