const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const writeLogOnBuildWebpackPlugin = require("./plugins/writeLogOnBuildWebpackPlugin");

module.exports = {
    entry: {
        pageOne: './src/pageOne/index.ts',
        pageTwo: './src/pageTwo/index.ts',
        pageThree: './src/pageThree/index.ts',
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        allowedHosts: 'all',
        port: 14567,
        open: true,
        client: {
            progress: true,
        },
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './js/[name].js',
        clean: true,
        environment: {
            arrowFunction: false
        }
    },
    mode: 'development',
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: [
                            [
                                "@babel/preset-env",
                                {
                                    "targets": {
                                        "chrome": "58",
                                        "ie": "11"
                                    },
                                    "corejs": "3",
                                    "useBuiltIns": "usage"
                                }
                            ]
                        ]
                    }
                }, {
                    loader: 'ts-loader',
                }],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "sass-loader",
                    options: {
                        modules: true
                    }
                }]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new writeLogOnBuildWebpackPlugin(),

        new HtmlWebpackPlugin({
            template: path.resolve('./src/index.html'),
            filename: 'index.html',
            title: "powered by evan_lee",
            chunks: ['index'],
            hash: true,
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true
            }
        }),

        new HtmlWebpackPlugin({
            filename: 'pageOne.html',
            title: "pageOne",
            inject: 'body',
            chunks: ['pageOne'],
            hash: true,
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true
            }
        }),
        new HtmlWebpackPlugin({
            filename: 'pageTwo.html',
            inject: 'body',
            chunks: ['pageTwo'],
            hash: true,
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true
            }
        }),
        new HtmlWebpackPlugin({
            filename: 'pageThree.html',
            inject: 'body',
            chunks: ['pageThree'],
            hash: true,
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true
            }
        })
    ]
}
