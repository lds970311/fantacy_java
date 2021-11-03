import * as path from "path";
// @ts-ignore
import HtmlWebpackPlugin from "html-webpack-plugin"
import {CleanWebpackPlugin} from "clean-webpack-plugin";
import generateHTMLConfig from "./src/utils/gererateHTMLConfig";

const ParallelUglifyPlugin = require("webpack-parallel-uglify-plugin")

const config = {
    mode: "development",
    entry: {
        index: "./src/main.ts",
        about: "./src/about/about.ts",
        js_Dom: "./src/js_Dom/js_Dom.ts",
        js_Advance: "./src/js_Advance/js_Advance.ts",
        myWebpack: "./src/myWebpack/myWebpack.ts",
        performance: "./src/performance/performance.ts"
    },
    devtool: 'inline-source-map',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, "dist"),
        clean: true
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    //开启tree-shaking
    optimization: {
        usedExports: true, // 识别无用代码
        minimize: true,    // 将无用代码在打包中删除
        concatenateModules: true, // 尽可能将所有模块合并输出到一个函数中
    },
    devServer: {
        compress: true,
        allowedHosts: 'all',
        open: true,
        port: 13288,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.tsx?$/,
                include: path.resolve(__dirname, 'src'),
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                            happyPackMode: true,
                        },
                    },
                ],
                exclude: /node_modules/
            },
            {
                test: /\.less$/i,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.jsx?$/i,
                use: [
                    {
                        loader: "babel-loader",
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./src/index.html"),
            filename: "index.html",
            title: "首页",
            hot: true,
            chunks: ["index"]
        }),
        ...generateHTMLConfig([
            "about",
            "js_Advance",
            "js_Dom",
            "myWebpack",
            "performance"
        ]),
        new ParallelUglifyPlugin({
            uglifyJS: {
                output: {
                    /*
                     是否输出可读性较强的代码，即会保留空格和制表符，默认为输出，为了达到更好的压缩效果，
                     可以设置为false
                    */
                    beautify: false,
                    /*
                     是否保留代码中的注释，默认为保留，为了达到更好的压缩效果，可以设置为false
                    */
                    comments: false
                },
                compress: {
                    /*
                     是否在UglifyJS删除没有用到的代码时输出警告信息，默认为输出，可以设置为false关闭这些作用
                     不大的警告
                    */
                    warnings: false,

                    /*
                     是否删除代码中所有的console语句，默认为不删除，开启后，会删除所有的console语句
                    */
                    drop_console: true,

                    /*
                     是否内嵌虽然已经定义了，但是只用到一次的变量，比如将 var x = 1; y = x, 转换成 y = 5, 默认为不
                     转换，为了达到更好的压缩效果，可以设置为false
                    */
                    collapse_vars: true,

                    /*
                     是否提取出现了多次但是没有定义成变量去引用的静态值，比如将 x = 'xxx'; y = 'xxx'  转换成
                     var a = 'xxxx'; x = a; y = a; 默认为不转换，为了达到更好的压缩效果，可以设置为false
                    */
                    reduce_vars: true
                },
            },
            test: /.ts$/g,
            include: [],
            exclude: [],
            cacheDir: './cache',
            workerCount: 6,
            sourceMap: false
        })
    ]
}

export default config
