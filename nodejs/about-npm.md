# About npm

新版Nodejs已经集成了npm,所有安装node也同事安装了npm。

* 查看npm版本

```
npm -v
5.6.0
```

* 使用 npm 命令安装模块

```
npm install express      # 本地安装
npm install express -g   # 全局安装

npm install express
var express = require('express');
```

位于express文件夹下有一个`package.json`文件。

* 卸载模块

`npm uninstall express`

* 更新模块

`npm update express`

* 创建模块

`npm init`

* 发布模块

`npm publish`