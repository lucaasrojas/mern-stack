const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/app/index.js',
    output: {
        path: __dirname + '/src/public',
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/public/index.html',
            hash: true
        }),
        new MiniCSSExtractPlugin()
    ],
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                loader: [
                    MiniCSSExtractPlugin.loader,
                    "css-loader"
                ],
                test: /\.css$/,
                exclude: /src\/public/
            },
            {
                loader: [
                    MiniCSSExtractPlugin.loader,
                    "css-loader",
                    'sass-loader'
                ],
                test: /\.scss$/
            }
        ]
    }
}