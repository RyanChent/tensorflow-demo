const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const resolve = (current) => path.resolve(__dirname, '..' , current)

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    entry: resolve('./src/main.tsx'),
    output: {
        path: resolve('./dist'),
        filename: 'ts-app.js'
    },
    target: 'web',
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.less'],
        alias: {
            '@': resolve('./src'),
        }
    },
    module: {
        rules: [
            {
                test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
                type: 'asset'
            },
            {
                test: /\.(less|css)$/,
                use: [
                    isProd ? MiniCssExtractPlugin.loader : 'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'less-loader',
                ]
            },
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'tensorflow-app-demo',
            template: resolve('./public/index.html'),
            filename: './index.html',
            inject: true
        })
    ]
}