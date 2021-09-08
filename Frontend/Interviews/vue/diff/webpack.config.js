const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
//配置信息
module.exports = {
    entry: './src/index.js',
    devServer: {
        contentBase: './dist',
        open: true,
        port: 8989,
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true,
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'diff',
            template: "./src/index.html"
        }),
    ]
};