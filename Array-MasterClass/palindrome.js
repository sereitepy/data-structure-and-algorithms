function findPalindrom(string) {
  const reversed = string.split('').reverse().join('')
  if (string === reversed) {
    console.log(`${string} is a palindrome`)
  } else {
    console.log(`${string} is NOT a palindrome`)
  }
}

findPalindrom('abbas')
