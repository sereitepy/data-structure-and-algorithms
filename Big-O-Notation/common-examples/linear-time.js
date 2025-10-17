function linearTime(n) {
  for (let i = 0; i < n; i++) {
    console.log(i)
  }
}

linearTime(5)
// output: 0, 1, 2, 3, 4

/*
O(n)
This Big O Notation complexity is called Linear Time
In this case, O(5). So, the input is only 1 time, but we access the input number 5 times to compare the current iteration of the for loop
*/
