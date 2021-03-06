const {
    merge
} = require('webpack-merge')
const webpackBase = require('./webpack.config')

module.exports = env => merge(webpackBase(env), {
    mode: 'development',
    devtool: 'eval-cheap-source-map',
    devServer: {
        host: '0.0.0.0',
        port: 10086,
        hot: true
    },
})