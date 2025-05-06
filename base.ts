// 类型注释
let age: number =19;
let myName: string ='zsy';

const obj = {
    number: 12,
    name: 'zsy',
}
const arr  = [{}, 2];
obj.name = 'ss';
console.log(age, myName, obj);
function add(num1:number, num2: number) :number {
    return num1 + num2;
}
// 类型别名
type MyUserName = string | number;
let a: MyUserName = 'sss'
a = 10;
console.log(add( 1, 2))
