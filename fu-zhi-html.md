# 复制html

将index.html文件放进打包文件夹中。

```js
npm install --save-dev html-webpack-plugin

const path = require('path');
+ const HtmlWebpackPlugin = require('html-webpack-plugin');

  module.exports = {
    entry: {
      app: './src/index.js',
      print: './src/print.js'
    },
+   plugins: [
+     new HtmlWebpackPlugin({
+       title: 'Output Management'
+     })
+   ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    }
  };
```

执行 webpack 后我们会发现，在dist文件夹下出现Index.html这个文件。