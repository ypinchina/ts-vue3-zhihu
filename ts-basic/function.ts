// 函数有输入和输出
function add (x:number,y: number,z?:number):number {
  
  return x + y
}
let addResult = add(1, 3)

interface ISum {
  (x:number,y:number,z?:number):number
}
const add2: (x:number, y:number, z?:number) => number = add
const add3: ISum = add