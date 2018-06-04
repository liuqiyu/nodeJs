# 如何在node.js中优雅使用ES6

```js
npm install -g es-checker

// 全局安装
npm install babel-cli -g

npm install babel-preset-es2015 --save

// .babelrc
{
    "presets": [
        "es2015"
    ],
    "plugins": []
}

// package.json
 "scripts": {
    "start": "node ./bin/www",
    "start1": "babel-node ./bin/www"
  },
  
// npm run start1
```