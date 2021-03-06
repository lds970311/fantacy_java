import * as path from "path";
// @ts-ignore
import HtmlWebpackPlugin from "html-webpack-plugin"
import {CleanWebpackPlugin} from "clean-webpack-plugin";
import generateHTMLConfig from "./src/utils/gererateHTMLConfig";
import {Configuration} from "webpack";

const HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin');
const ParallelUglifyPlugin = require("webpack-parallel-uglify-plugin")

// @ts-ignore
const config: Configuration = {
    mode: "development",
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
    // @ts-ignore
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
                ],
                exclude: /node_modules/
            },
            //????????????
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
        new HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./src/index.html"),
            filename: "index.html",
            title: "??????",
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
        new ParallelUglifyPlugin({
            uglifyJS: {
                output: {
                    /*
                     ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                     ???????????????false
                    */
                    beautify: false,
                    /*
                     ??????????????????????????????????????????????????????????????????????????????????????????????????????false
                    */
                    comments: false
                },
                compress: {
                    /*
                     ?????????UglifyJS????????????????????????????????????????????????????????????????????????????????????false??????????????????
                     ???????????????
                    */
                    warnings: false,

                    /*
                     ??????????????????????????????console????????????????????????????????????????????????????????????console??????
                    */
                    drop_console: true,

                    /*
                     ?????????????????????????????????????????????????????????????????????????????? var x = 1; y = x, ????????? y = 5, ????????????
                     ????????????????????????????????????????????????????????????false
                    */
                    collapse_vars: true,

                    /*
                     ??????????????????????????????????????????????????????????????????????????????????????? x = 'xxx'; y = 'xxx'  ?????????
                     var a = 'xxxx'; x = a; y = a; ????????????????????????????????????????????????????????????????????????false
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
