/*
 * @Description: 
 * @Author: maxiaofei
 * @Date: 2024-06-05 22:14:58
 * @LastEditors: maxiaofei
 * @LastEditTime: 2024-06-05 22:27:54
 */

//  readonly , 可选属性
interface List {
  id: number;
  name: string;
  [x: string]: any
}

interface Result {
  data: List[]
}

function render(result:Result){
  result.data.forEach(value => {
    console.log(value.id,value.name);
    
  })
}

let result = {
  data: [
    {id: 1, name: 'a', sex: 'male'},
    {id: 2, name: 'b'}
  ]
}

render(result)

interface StringArray {
  [index: number] : string
}

let chars:StringArray = ['A', 'B']

interface Names {
  [x: string] : string;
  [z: number] : string;
}



