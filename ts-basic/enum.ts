// 枚举  一周有几个星期 三原色等
enum Direction {
  Up, Down, Right, Left
}

// 双向赋值
console.log(Direction.Up) // 0
console.log(Direction[0])


const enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Right = 'Right',
  Left = 'Right'
}
const up = 'Up' // 服务器返回
if (up === Direction2.Up) {
  console.log('go up')
}
// 常量枚举可以提升性能