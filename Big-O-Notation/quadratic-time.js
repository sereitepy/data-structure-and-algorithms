function quadraticTime(n) {
  for (let i = 0; i < n; i++) {
    console.log(i)
    for (let j = i; j < n; j++) {
      console.log(j)
    }
  }
}

quadraticTime(3)
/*
Output: 
0
0
1
2
1
1
2
2
2

O(n^2)
This Big O Notation Complexity is specific to the same input being accessed twice and printed twice.
With the specifc example of a for loop nesting another for loop that access the same input number.
*/