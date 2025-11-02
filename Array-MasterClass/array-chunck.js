function mySolution(array, size) {
  const result = []
  let newArr = array
  for (let i = 0; i < newArr.length; i += size) {
    const sliced = newArr.slice(i, i + size)
    result.push(sliced)
  }
  console.log(result)
}

// mySolution([1, 2, 3, 4, 5, 6, 7, 8], 3)

/**
 * TODO:
 * - Find the length of the array, see if it can be divided by size
 * - Split the divided size and push to another big array
 */

// Instructor Solution
const inSolution = (array, size) => {
  const result = []
  let index = 0
  while (index <= array.length) {
    const chunk = array.slice(index, index + size)
    result.push(chunk)
    console.log(chunk)
    index += size
  }
  console.log(result)
}

inSolution([1, 2, 3, 4, 5, 6, 7, 8], 3)
