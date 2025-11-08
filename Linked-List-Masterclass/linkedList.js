const lists = [
  { data: 'Tepy', next: 1 },
  { data: 'third', next: null },
  { data: 'second', next: 2 },
]

function explore(list) {
  let start = 0
  const queue = []
  const result = []
  const visited = new Array(list.length).fill(false)
  visited[start.next] = true
  queue.push(start.next)

  if (queue.length > 0) {
    const current = queue[0]
    queue.shift()
    visited[current] = true
    result.push(current)
    for (const x of list[current]) {
      if (!visited[x.next]) {
        visited[x.next] = true
        queue.push(x.next)
      }
    }
    console.log({ queue: queue, visited: visited, result: result })
  }
  console.log(result)
}

// explore(lists)

// ------------------------

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value)
    this.tail = this.head
    this.length = 1
  }

  push(value) {
    const newNode = new Node(value)
    this.tail.next = newNode
    this.tail = newNode
    if (
      // this.head.value === null ||
      // NOT this.head ||
      // this.head.value === undefined
      !this.head.value
    ) {
      this.head = newNode
      this.tail = newNode
      this.length = 1
    }
    // this.head.next = newNode
    this.length++
    return this.head, newNode, this.tail
  }
}

const myLink = new LinkedList()
console.log(myLink.push(10))
// console.log(myLink.push('jan'))

console.log(myLink)
