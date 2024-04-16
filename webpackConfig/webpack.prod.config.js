const baseConfig = require('./webpack.base.config.js')
const merge = require('webpack-merge').merge()
const dotenv = require("dotenv-webpack");
const webpack = require('webpack')
module.exports = merge(baseConfig, {
    mode: 'production', // 生产模式的打包
    plugins: [
        new webpack.DllReferencePlugin({
            manifest: require(__dirname + '/vendor-manifest.json'),
        }),
        new dotenv({
            path: './.env.production'
        }),
        new webpack.DefinePlugin({
            baseURL: 'www.example.com'
        })
    ]
})
