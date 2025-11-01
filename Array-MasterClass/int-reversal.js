function intReversal(number) {
  const reversed = number.toString().split('').reverse().join('')

  console.log(parseInt(reversed) * Math.sign(number))
}

intReversal(1234)
