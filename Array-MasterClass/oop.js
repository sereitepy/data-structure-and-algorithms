class MyFirstClassWithJavascript {
  constructor() {
    this.data = {}
    this.length = 0
  }

  push(item) {
    this.data[this.length] = item
    this.length++
  }

  get(index) {
    return this.data[index]
  }

  pop() {
    const lastItem = this.data[this.length - 1]
    delete this.data[this.length - 1]
    this.length--
    return { data: this.data, 'deleted data': lastItem }
  }

  shift() {
    const firstItem = this.data[0]
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1]
    }

    delete this.data[this.length - 1]
    this.length--
    return { data: this.data, 'deleted data': firstItem }
  }

  delete(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1]
    }
    delete this.data[this.length - 1]
    this.length--
    return this.data
  }

  reservse(index){
    const string = this.data[index]
    const newString = ''
    for (let i = string.length - 1; i = 0; i--) {
      newString.push(string[i])
      console.log(string[i])
    }
    return newString
  }
}

const manMadeArray = new MyFirstClassWithJavascript()
manMadeArray.push('I am Tepy, I am 21 years old')
manMadeArray.push('I am a Full-Stack Developer')
manMadeArray.push('I am a year four student!')

// console.log(manMadeArray.data)
// console.log(manMadeArray.delete(0))
console.log(manMadeArray.data)
console.log(manMadeArray.reservse(1))
console.log(manMadeArray.data)



// console.log(manMadeArray.shift())
// console.log(manMadeArray.data)

// console.log(manMadeArray)
// console.log('-0-----------')
// manMadeArray.get(1)
// console.log(manMadeArray.get(0))
// console.log(manMadeArray.pop())
// console.log(manMadeArray)
