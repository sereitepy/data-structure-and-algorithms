// reverse string
function reverseString(word) {
  const result = word.split('').reverse().join('')
  console.log(result)
}
reverseString('eyo what up')

// palindrome
function palindrome(word) {
  const reversed = word.split('').reverse().join('')
  if (reversed === word) {
    console.log(`This word "${word}" is a palindrome`)
  } else {
    console.log(`This word: "${word}" is NOT a palindrome`)
  }
}
palindrome('tept')

// int reversal
function intReversal(number) {
  const reversed = number.toString().split('').reverse().join('')
  const result = parseInt(reversed) * Math.sign(number)
  console.log(result)
}
intReversal(28164)

// sentence capitalization
function sentenceCapitalization(word) {
  const array = word
    .toLowerCase()
    .split(' ')
    .map(eachItem => {
      return eachItem[0].toUpperCase() + eachItem.slice(1)
    })
    .join(' ')
  console.log(array)
}
sentenceCapitalization('hEyyy how are you?')

// oop
class OOP {
  constructor() {
    this.data = {}
    this.length = 0
  }

  push(item) {
    this.data[this.length] = item
    this.length++
    return this.data
  }

  get() {
    return this.data
  }

  pop() {
    delete this.data[this.length - 1]
    this.length--
    return this.data
  }

  shift() {
    // shift all items to the left
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1]
    }
    delete this.data[this.length - 1]
    this.length--
    return this.data
  }

  delete(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1]
    }
    delete this.data[this.length - 1]
    this.length--
    return this.data
  }
}
const test = new OOP()
console.log(test.push('tepy'))
console.log(test.push('tepyyyy'))
console.log(test.pop())
console.log(test.push('um...'))
console.log(test.push('PIZAA...'))
console.log(test.shift())
console.log(test.delete(0))
console.log(test.get())

// max profit
function maxProfit(prices) {
  let minPrice = prices[0]
  let maxProfit = 0
  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i]
    minPrice = Math.min(currentPrice, minPrice)
    const potentialProfit = currentPrice - minPrice
    maxProfit = Math.max(potentialProfit, maxProfit)
  }
  console.log(
    `I bought stocks for $${minPrice} and sold for $${
      maxProfit + minPrice
    }, which profitted me: $${maxProfit}`
  )
}
maxProfit([8, 4, 1, 8, 5, 9])

// array chunk
function arrayChunk(array, size) {
  const result = []
  let index = 0
  while (index < array.length) {
    result.push(array.slice(index, index + size))
    index += size
  }
  console.log(result)
}
arrayChunk([2, 3, 4, 6, 2, 1, 9], 3)

// fizzbuzz
function fizzBuzz(n) {
  let index = 1
  while (index <= n) {
    if (index % 3 === 0 && index % 5 === 0) {
      console.log('FizzBuzz')
    } else if (index % 3 === 0) {
      console.log('Fizz')
    } else if (index % 5 === 0) {
      console.log('Buzz')
    }
    index++
  }
}
fizzBuzz(30)
