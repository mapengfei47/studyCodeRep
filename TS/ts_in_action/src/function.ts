/*
 * @Description: 
 * @Author: maxiaofei
 * @Date: 2024-06-05 22:22:56
 * @LastEditors: maxiaofei
 * @LastEditTime: 2024-06-05 22:39:32
 */

// let Add: (x: number, y:number) => number

// interface Add {
//   (x:number,y:number):number
// }

type Add = (x: number, y: number) => number

let add: Add = (a,b) => a + b

interface Lib {
  (): void,
  version: string,
  doSomething():void
}

function getLib(){
  let lib:Lib = (() => {}) as Lib
  lib.version = '1.0'
  lib.doSomething = () => {}
  return lib;
}

let lib1 = getLib();
lib1.doSomething();
let lib2 = getLib();

// 可选参数

function add5(x: number, y?: number){
  if(y){
    return x + y
  }
  return x
}

add5(1,2)

// 参数默认值
function add6(x:number, y = 0, z:number,q = 1){
  return x + y + z + q
}

add6(1,undefined,3)

// 剩余参数
function add7(x: number,...rest:number[]){
  return x + rest.reduce((pre,cur) => pre + cur)
}

console.log(add7(1,2,3,4,5))

// 函数重载
function add8(...rest:number[]):number
function add8(...rest:string[]):string
function add8(...rest:any[]):any {
  let first = rest[0]
  if(typeof first === 'number'){
    return rest.reduce((prev,cur) => prev + cur)
  }

  if(typeof first === 'string'){
    return rest.join('')
  }
}

console.log(add8(1,2,3,4,5,6));
console.log(add8('hello','world','&','hello','typescript'));

