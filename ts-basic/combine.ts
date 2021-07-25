// 类型推论断言 和 联合类型

let str = 'str'
// str = 2 报错

//联合类型

let numberOrString: number | string
// 只能使用联合类型共有的方法和属性
// numberOrString.toString()

function getLength(input: string | number): number {
  const str = input as string
  if (str.length) {
    return str.length
  } else {
    const num = input as number
    return num.toString().length
  }
}

// type guard
function getLength2(input: number | string): number {
  if (typeof input === 'string') {
    return input.length
  } else {
    return input.toString().length
  }
}