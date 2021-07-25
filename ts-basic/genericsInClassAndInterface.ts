class Queue<T> {
  private arr = []
  push(item: T) {
    this.arr.push(item)
  }
  pop():T {
    return this.arr.shift()
  }
}

const newqueue = new Queue<number>()
newqueue.push(1)
console.log(newqueue.pop().toFixed())


interface TestQueue <T, U>{
  key: T,
  value: U
}
const arr:TestQueue<number, string> = { key: 1, value:'234'}