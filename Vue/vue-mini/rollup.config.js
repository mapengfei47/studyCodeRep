/*
 * @Author: allanma allanma@xiaoe-tech.com
 * @Date: 2024-05-08 15:28:26
 * @LastEditors: allanma allanma@xiaoe-tech.com
 * @LastEditTime: 2024-05-08 16:06:46
 * @FilePath: /vue-mini/rollup.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
export default {
    input: './packages/vue/src/index.ts',
    output: [
        {
            sourcemap: true,
            file: './packages/vue/dist/vue.js',
            format: 'iife',
            name: 'Vue'

        }
    ],
    plugins: [
        typescript({
            sourceMap: true,
        }),
        resolve(),
        commonjs()
    ]
}