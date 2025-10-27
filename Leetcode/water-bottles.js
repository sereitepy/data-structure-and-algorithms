/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
const numWaterBottles = function (numBottles, numExchange) {
  let whatWeHave = numBottles
  let drink = numBottles
  let remainder = 0
  
  while (whatWeHave >= numExchange) {
    division = whatWeHave / numExchange
    bottle = whatWeHave % numExchange
    remainder = division - bottle
    total = bottle + remainder
    whatWeHave = total
    drink += total

    let rounder = Math.round(drink)
    if (rounder - drink > 5) {
      console.log(Math.round(drink),
      rounder - drink,
      drink,
      )
    } else {
      console.log(Math.floor(drink))
    }

  }
  let rounder = Math.round(drink)
    if (rounder - drink > 5) {
      return Math.round(drink)
    } else {
      return Math.floor(drink)
    }
  
}

numWaterBottles(21, 4)

// ----------------------------------------------------------------

var corrected = function (numBottles, numExchange) {
  let drink = numBottles // We drink all initial bottles
  let emptyBottles = numBottles // Now we have this many empty bottles

  while (emptyBottles >= numExchange) {
    let newBottles = Math.floor(emptyBottles / numExchange) // Exchange for new bottles
    drink += newBottles // Drink the new bottles
    emptyBottles = (emptyBottles % numExchange) + newBottles // Leftover + newly emptied bottles
  }

  return drink
}