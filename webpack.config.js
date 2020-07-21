const path = require('path');
const htmlWebpack= require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports={
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.[contentHash].js'
    },
    plugins: [ new CleanWebpackPlugin(),new htmlWebpack()],
    module:{
        rules:[
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]

    }
}