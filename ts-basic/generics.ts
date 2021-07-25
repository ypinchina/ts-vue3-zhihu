function echo<T> (param: T): T {
  console.log(param)
  return param
}
echo(5)
// 保证传参和返回值是同一种类型
// 这就是泛型

function echo2<T> (param: T[]): T[] {
  console.log(param.length)
  return param
}
console.log(echo2([2,5,'5252']))
// 元祖使用

function echoTurple<T, U> (param: [T, U]): [U, T] {
  return [param[1], param[0]]
}
const echoTurpleShili = echoTurple(['string', 122])
console.log(echoTurpleShili)

// 约束泛型
interface HasLength {
  length: number
}

function echoWithLength<T extends HasLength>(echo: T):T {
  console.log(echo.length)
  return echo
}

console.log(echoWithLength('str'))
console.log(echoWithLength({length: 5, width: 100}))
console.log(echoWithLength([2, 5,6]))

// 错误
// console.log(echoWithLength(123))