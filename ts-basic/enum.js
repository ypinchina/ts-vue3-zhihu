// 枚举  一周有几个星期 三原色等
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Right"] = 2] = "Right";
    Direction[Direction["Left"] = 3] = "Left";
})(Direction || (Direction = {}));
// 双向赋值
console.log(Direction.Up); // 0
console.log(Direction[0]);
var up = 'Up'; // 服务器返回
if (up === "Up" /* Up */) {
    console.log('go up');
}
// 常量枚举可以提升性能
