/*
 * @Description: 
 * @Author: maxiaofei
 * @Date: 2024-06-05 17:24:55
 * @LastEditors: maxiaofei
 * @LastEditTime: 2024-06-05 17:29:48
 */
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.config')

module.exports = merge(baseConfig,{
    mode: 'development'
})