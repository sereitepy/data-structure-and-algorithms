function cubicTime(n) {
  for (let i = 0; i < n; i++) {
    console.log(i)
    for (let j = i; j < n; j++) {
      console.log(j)
      for (let k = j; k < n; k++) {
        console.log(k)
      }
    }
  }
}

cubicTime(2)
/*
Output:
0
0
0
1
1
1
1
1
1

O(n^3)
This Big O Notation complexity is specific to a function that runs 3 for loops nested inside each other
*/