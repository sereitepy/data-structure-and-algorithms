function reverseString(string) {
  console.log(string.split('').reverse().join(''))
}
reverseString('hello')

function palindrome(string) {
  const reversed = string.split('').reverse().join('')
  if (string === reversed) {
    console.log(`This ${string} is a palindrome`)
  } else {
    console.log(`This ${string} is NOT a palindrome`)
  }
}
palindrome('ollo3e')

function sentenseCapital(sentense) {
  const result = sentense
    .toLowerCase()
    .split(' ')
    .map(word => {
      return word[0].toUpperCase() + word.slice(1)
    })
    .join(' ')
  console.log(result)
}
sentenseCapital('heyy sooo this is meee!!!')

function intReverse(number) {
  const result = number.toString().split('').reverse().join('')
  console.log(parseInt(result) * Math.sign(number))
}
intReverse(194434)

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
    const firstItem = this.data[0]
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1]
    }
    delete this.data[this.length - 1]
    this.length--
    return {
      'deleted Data': firstItem,
      data: this.data,
    }
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

const newOop = new OOP()
console.log(newOop.push('Tepy'))
console.log(newOop.push('Yes'))
console.log(newOop.push('I love coding'))
console.log(
  newOop.push(
    'idk why but i have this sense of desperation of conquering full-stack development'
  )
)
console.log(newOop.push('i really want to be good like really goooood'))
console.log(newOop.get())
console.log(newOop.pop())
console.log(newOop.shift())
console.log(newOop.delete(3))

const fizzbuzz = n => {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz')
    } else if (i % 3 === 0) {
      console.log('Fizz')
    } else if (i % 5 === 0) {
      console.log('Buzz')
    } else {
      console.log(i)
    }
  }
}
fizzbuzz(30)

const maxProfit = prices => {
  let maxProf = 0
  let minPrice = prices[0]

  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i]
    minPrice = Math.min(currentPrice, minPrice)
    const profit = currentPrice - minPrice
    maxProf = Math.max(profit, maxProf)
    console.log(
      `current lowest: ${minPrice} sold for ${currentPrice} maxProfit is: ${maxProf}`
    )
  }
  console.log(minPrice, maxProf)
}

maxProfit([2, 8, 5, 1, 3]) // basically the algorithm says its best to by at $2 and sell it at $8

const arrayChunk = (arr, size) => {
  const result = []
  let index = 0

  while (index < arr.length) {
    const chunk = arr.slice(index, index + size) // the extracted chunk based on size
    result.push(chunk) 
    index += size // iterate to the next size chunk
  }
  console.log(result)
}

arrayChunk([1, 2, 3, 4, 5, 6, 7, 8], 3)

function makeRopeColorful(colors, neededTime) {
  let minTime = 0

  for (let i = 0; i < colors.length; i++) {
    if (colors[i] === colors[i + 1]) { // if repeated colors found
      minTime += Math.min(neededTime[i], neededTime[i + 1]) // check both balloons and choose the one with the quickest neededTime
      neededTime[i + 1] = Math.max(neededTime[i], neededTime[i + 1]) // always bring the remaining neededTime forward so we can compare in the next iteration
    }
  }
  console.log(minTime)
}
makeRopeColorful('aaabbbabbbb', [3, 5, 10, 7, 5, 3, 5, 5, 4, 8, 1])
