const baseConfig = require('./webpack.base.config.js')
const merge = require('webpack-merge').merge()
const dotenv = require("dotenv-webpack");
console.log(process.env.NODE_ENV)
module.exports = merge(baseConfig, {
    mode: 'development', // 开发模式的打包
    devetool:'eval-cheap-source-map', // 开启source map
    devSevere: {
        host: '127.0.0.1',
        port: 8080,  // 本地启开发服务器  端口为8080
        hot:true,   // 开启热更新
        proxy: {
            // 代理配置
            // '/api': {
            //     target: 'http://127.0.0.1:8080',
            //     changeOrigin: true,
            //     pathRewrite: {
            //         '^/api': ''
            //     }
            // }
        }
    },
    plugins: [
        new dotenv({
            path: './.env.development'
        })
    ]
})
