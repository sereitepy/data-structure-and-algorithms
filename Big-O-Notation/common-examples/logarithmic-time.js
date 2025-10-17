function logarithmicTime(n) {
  for (let i = 2; i <= n; i = i * 2) {
    console.log(i)
  }
}

logarithmicTime(1000000)
/* 128
256
512
1024
2048
4096
8192
16384
32768
65536
131072
262144
524288

O(log n) = Logarithmic Time
  This Big O notation complexity analysis is for this specific function with this for loop.
  Where the defined number is a '2', and with the limit of the number is less than or equal to the input number.
  In this case, the defined number is '2' and the input number is 1 million,
  So, 2 keeps being multiplied by 2 and keeps on going until the defined number cannot be more than the 1 million input number.

*/