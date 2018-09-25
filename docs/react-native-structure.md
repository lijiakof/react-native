# React Native 项目结构

* 项目结构
* 目录结构
* 代码结构

## 项目结构
参考：[百场汇 Web 前端](http://reecho.baichanghui.com/article/1)

React Native 项目与 WEB（Vue）项目在结构上有一些不同之处在于，React Native 借助于 JSBridge 与 Navite 进行通讯，然而 WEB 可以直接操作浏览器的内容。


## 目录结构

整个项目结构，与之前 Web 前端项目基本一直，借助于 react-native-cli，Native 的项目结构部分我们不用过多的操心，主要是 JavaScrit 的部分。与 Web 项目不同的在于，我们不用太多的考虑按需加载页面，因为整个包基本在本地运行，页面、组件、模块之间的引用我们用类似于 CMD 的规范。即便是有热更新的机制，我们也是将补丁包下载完了再运行。

整体项目的目录结构如下：

* android
* ios
* src
    * business
    * components
    * config
    * locales
    * navigator
    * resource
    * views
    * widgets
    * app.js
* index.js

### src/business



## 代码结构


