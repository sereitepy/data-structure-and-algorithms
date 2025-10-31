function tepySolution(string) {
  const reversed = []
  for (let i = string.length - 1; i >= 0; i--) {
    reversed.push(string[i])
    console.log(string[i])
  }
  console.log('aye', reversed.toString().replace(/,/g, ''), string)
}

tepySolution('Sereitepy Or')

function instructorSolution(string) {
  string.split('').reverse().join('') // idk why it doesn't work
  console.log(string)
  return string
}

instructorSolution('Hello')
