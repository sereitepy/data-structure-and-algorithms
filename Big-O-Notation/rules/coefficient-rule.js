function coefficientRule(n) {
  let count = 0
  for (let i = 0; i < 5 * n; i++) {
    count+=1
    console.log(count)
  }
}

coefficientRule(3)
/*
Output:
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15

The input is only 3, but the loop operation is 15 times.
Its all because of the constant '5'
Its called a 'constant' because the number '5' will always be '5' throughout the entire loop
so we can say our Time-Space Complexity for this algorithm is:

f(n) = 5n
But! The Coefficient Rule says...

kf(n) = O(g(n)) is also f(n) = O(g(n)) for k > 0
the 'k' is the constant.

So in this case 5f(n) is also just f(n) because 5 > 0
And, f(n) is equal to O(n) so the algorithm is Linear Time!

*/