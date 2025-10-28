function town(n, trust) {
  /**
   * n = the sus person
   * trust = see how these people trusts each other
   * if other people trusts n, return n, else return -1
   */

  const a = []
  const result = []
  const length = trust.length

  for (let i = 0; i < length; i++) {
    a.push(trust[i][1])
    console.log(a)
  }

  if (a.length > 1) {
    for (let i = 0; i < a.length; i++) {
      const compare = a[i]
      const next = a[i + 1]
      if (next !== undefined) {
        if (compare === next) {
          result.push(a[i])
        } else {
          result.push[-1]
        }
      }
    }
  } else {
    result.push(n)
  }

  console.log(result)
}

town(3, [
  [1, 3],
  [2, 3],
  [3, 1],
])
