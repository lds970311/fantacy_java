import HtmlWebpackPlugin from "html-webpack-plugin";

const generateHTMLConfig = (names: string[]): HtmlWebpackPlugin[] => {
    return names.map(item => {
        return new HtmlWebpackPlugin({
            template: `./src/${item}/${item}.html`,
            filename: `${item}.html`,
            hot: true,
            chunks: [item],
            title: `${item}`
        })
    })
}

export default generateHTMLConfig
