const webpack = require('webpack')

// 提前打包不变的包 通知到正式打包  dll 处理过的不再处理
module.exports = {
    mode: 'production',
    entry: {
        vendor: [
            'axios',
            'lodash'
        ]
    },
    output: {
        path: __dirname + '/dist/dll',
        filename: '[name].dll.js',
        library: '[name]_library'  // 通知定位哪些东西已经打包
    },
    plugins: [
        new webpack.DllPlugin({  // 这个插件会输出一个json  json去通知到正式打包 这些东西已经打包
            path: __dirname+"/[name]-manifest.json",
            name: '[name]_library',  // 跟library同名
            context: __dirname,   // 当前文件夹 目录
        })
    ]
}
