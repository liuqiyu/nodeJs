### 复制html

将index.html文件放进打包文件夹中。

```js
npm install --save-dev html-webpack-plugin

// webpack.config.js
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

### 清理/dist文件

由于过去的代码遗留下来，导致代码相当的混乱。所以我们会在打包前删除之前打包的文件。

```js
npm install clean-webpack-plugin --save-dev

// webpack.config.js
  const path = require('path');
  const HtmlWebpackPlugin = require('html-webpack-plugin');
+ const CleanWebpackPlugin = require('clean-webpack-plugin');

  module.exports = {
    entry: {
      app: './src/index.js',
      print: './src/print.js'
    },
    plugins: [
+     new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
        title: 'Output Management'
      })
    ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    }
  };
```