/*
 * @Description: 
 * @Author: maxiaofei
 * @Date: 2024-06-05 17:24:47
 * @LastEditors: maxiaofei
 * @LastEditTime: 2024-06-05 17:32:38
 */
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: '/src/index.ts',
    output: {
        filename: 'bundle.js'
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
    module: {
        rules: [
            { test: /\.([cm]?ts|tsx)$/, loader: "ts-loader" }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
}