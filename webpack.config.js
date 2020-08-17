const path = require('path')

module.exports = {
    entry: './src/app/index.js',
    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    }
}