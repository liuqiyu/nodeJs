# source-map提示

> 本指南中的工具仅用于开发环境，请不要在生产环境中使用它们！

当我们将文件打包成Bundle.js。很难追踪到具体哪个文件出现了问题。这是需要用`source map`这个功能实现将编译后的代码映射回原始源代码。

```js
webpack.config.js

 const path = require('path');
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  const CleanWebpackPlugin = require('clean-webpack-plugin');

  module.exports = {
    entry: {
      app: './src/index.js',
      print: './src/print.js'
    },
+   devtool: 'inline-source-map',
    plugins: [
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
        title: 'Development'
      })
    ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    }
  };
```