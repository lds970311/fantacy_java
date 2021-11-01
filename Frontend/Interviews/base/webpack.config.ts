import * as path from "path";
// @ts-ignore
import HtmlWebpackPlugin from "html-webpack-plugin"
import {CleanWebpackPlugin} from "clean-webpack-plugin";

const config = {
    mode: "development",
    entry: "./src/main.ts",
    devtool: 'inline-source-map',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, "dist"),
        clean: true
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },

    devServer: {
        compress: true,
        allowedHosts: 'all',
        open: true,
        port: 13288,
        client: {
            progress: true,
        },
    },
    module: {
        rules: [{
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        }, {
            test: /\.tsx?$/,
            include: path.resolve(__dirname, 'src'),
            use: [{
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                    happyPackMode: true,
                },
            }],
            exclude: /node_modules/
        }]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./src/index.html"),
            title: "this is title"
        })
    ]
}

export default config
