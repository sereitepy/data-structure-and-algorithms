function brainPowerQuestion(questions) {
  let result = 0
  let brainPower = 1
  for (let i = 0; i < questions.length; i += brainPower) {
    for (const x of questions[i]) {
      result += questions[x][0]
      brainPower = questions[x][1] + 0
      console.log(questions[i], result, brainPower, questions[x])
    }
  }
  console.log(result)
}

brainPowerQuestion([
  [1, 1],
  [2, 2],
  [3, 3],
  [4, 4],
  [5, 5],
])

// ... not done yet