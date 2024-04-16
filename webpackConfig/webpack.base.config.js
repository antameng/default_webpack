const path = require("path");
const minicss = require("minicss");
const htmlWebpackPlugin = require("html-webpack-plugin");
const dotenv = require("dotenv-webpack");
const webpack = require("webpack")

let pluginArr = [
  new htmlWebpackPlugin({
    template: "./index.html",
    filename: "index.html",
    inject: true,
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true
    }
  }),
    new dotenv({
      path: './.env'
    })
]

function hasMiniCss() {
  if (process.env.NODE_ENV === "production") {
    pluginArr.push(new minicss({
      filename: 'test.bundle.css',
    }));
  }
}
hasMiniCss()
module.exports = {
  entry: {
    app: './src/app.js'  // 单文件入口
  },
  output: {
    path: path.resolve(__dirname, 'dist'),    //打包到dist文件夹下
    filename: '[name].[chunkhash:4].bundle.js'   // name 为 app， chunkhash:4 表示打包过后js文件的后四位哈希值
  },
  loder: {
    test: /\.css$/, // 匹配以css结尾的文件
    use: [
      process.env.NODE_ENV === 'production' ? minicss.loader : 'style-loader',
      'css-loader'
    ]  // 如果使用了less 或者 scss 还要加入less-loader 或者 scss-loader到数组中
  }
}
