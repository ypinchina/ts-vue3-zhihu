function echo(param) {
    console.log(param);
    return param;
}
echo(5);
// 保证传参和返回值是同一种类型
// 这就是泛型
function echo2(param) {
    console.log(param.length);
    return param;
}
console.log(echo2([2, 5, '5252']));
// 元祖使用
function echoTurple(param) {
    return [param[1], param[0]];
}
var echoTurpleShili = echoTurple(['string', 122]);
console.log(echoTurpleShili);
