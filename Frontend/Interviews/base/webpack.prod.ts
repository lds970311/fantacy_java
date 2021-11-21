import * as path from "path";
// @ts-ignore
import HtmlWebpackPlugin from "html-webpack-plugin"
import {CleanWebpackPlugin} from "clean-webpack-plugin";
import generateHTMLConfig from "./src/utils/gererateHTMLConfig";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const ParallelUglifyPlugin = require("webpack-parallel-uglify-plugin")

export default {
    mode: "production",
    entry: {
        index: "./src/main.ts",
        about: "./src/about/about.ts",
        js_Dom: "./src/js_Dom/js_Dom.ts",
        js_Advance: "./src/js_Advance/js_Advance.ts",
        myWebpack: "./src/myWebpack/myWebpack.ts",
        performance: "./src/performance/performance.ts",
        tsDecorator: "./src/tsDecorator/tsDecorator.ts"
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

    module: {
        rules: [
            {
                test: /\.css$/i,
                //抽离css
                use: [MiniCssExtractPlugin.loader, "css-loader"]

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
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
            },
            {
                test: /\.jsx?$/i,
                use: [
                    {
                        loader: "babel-loader?cacheDirectory",
                    }
                ],
                exclude: /node_modules/
            },
            //处理图片
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 5 * 1024,
                        outputPath: "images"
                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        //抽离css文件
        new MiniCssExtractPlugin({
            filename: "css/[name].css"
        }),
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
            "performance",
            "tsDecorator"
        ]),
    ],
    //开启tree-shaking
    optimization: {
        usedExports: true, // 识别无用代码
        minimize: true,    // 将无用代码在打包中删除
        concatenateModules: true, // 尽可能将所有模块合并输出到一个函数中
        //压缩css
        minimizer: [
            // [new TerserPlugin(), new OptimizeCSSAssetsPlugin({})]
        ],
        // 分割代码块
        splitChunks: {
            chunks: 'all',
            /**
             * initial 入口chunk，对于异步导入的文件不处理
             async 异步chunk，只对异步导入的文件处理
             all 全部chunk
             */

            // 缓存分组
            cacheGroups: {
                // 第三方模块
                vendor: {
                    name: 'vendor', // chunk 名称
                    priority: 1, // 权限更高，优先抽离，重要！！！
                    test: /node_modules/,
                    minSize: 1000,  // 大小限制
                    minChunks: 1  // 最少复用过几次
                },

                // 公共的模块
                common: {
                    name: 'common', // chunk 名称
                    priority: 0, // 优先级
                    minSize: 10,  // 公共模块的大小限制
                    minChunks: 2  // 公共模块最少复用过几次
                }
            }
        }
    },
}


