# Resources 管理资源

webpack最出色的功能之一就是，除了javascript,还可以通过loader引入任何其他类型的文件。

## 加载css

```js
npm install --save-dev style-loader css-loader

const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  
  // 这里是css loader
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
}
```
