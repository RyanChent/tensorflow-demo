const {
    merge
} = require('webpack-merge')
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpackBase = require('./webpack.config')

module.exports = merge(webpackBase, {
    mode: 'production',
    devtool: false,
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name]-[contenthash:6].css'
        })
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: false,
                terserOptions: {
                    output: {
                        comments: false
                    },
                    compress: {
                        pure_funcs: ['console.log']
                    }
                }
            })
        ]
    }
})