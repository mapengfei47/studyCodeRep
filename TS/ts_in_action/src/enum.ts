/*
 * @Description: 
 * @Author: maxiaofei
 * @Date: 2024-06-05 22:07:01
 * @LastEditors: maxiaofei
 * @LastEditTime: 2024-06-05 22:27:58
 */

// 数字枚举
enum Role {
  Reporter = 1,
  Developer,
  Maintainer,
  Owner,
  Guest,
}

console.log(Role.Reporter);

// 字符串枚举

enum Answer {
  N,
  Y = 'Yes'
}
