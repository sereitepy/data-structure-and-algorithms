function sentenceCapitalization(word) {
  const newWord = word.toLowerCase().split(' ')

  // for (let i = 0; i < newWord.length; i++) {
  //   let toUpper = newWord[i][0].toUpperCase()
  //   // newWord[i][0] = toUpper
  //   newWord[i][0] = newWord[i][0].toUpperCase()
  //   console.log(newWord[i][0], newWord)
  // }

  const cap = newWord.map(
    eachItemInArray =>
      eachItemInArray[0].toUpperCase() + eachItemInArray.slice(1)
  )
  const result = cap.join(' ')

  console.log(newWord.join(' '), cap, result)
}
sentenceCapitalization('sereitepy or hey')
