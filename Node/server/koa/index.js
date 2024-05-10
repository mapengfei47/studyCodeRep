/*
 * @Author: allanma allanma@xiaoe-tech.com
 * @Date: 2024-05-09 14:48:17
 * @LastEditors: allanma allanma@xiaoe-tech.com
 * @LastEditTime: 2024-05-09 15:10:35
 * @FilePath: /Node/server/koa/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const Koa = require('koa')
const fs = require('fs')
const app = new Koa()

const main = ctx => {
    ctx.response.type = 'html'
    ctx.response.body = fs.createReadStream('./index.html')
}

app.use(main)



app.listen(3000,() => console.log('服务器启动成功....'))