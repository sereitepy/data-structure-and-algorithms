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
  const reversed = string.split('').reverse().join('')
  console.log(reversed)
  return string
}

instructorSolution('Hellooo.!')
