/*
 * @Author: your name
 * @Date: 2020-08-21 08:24:28
 * @LastEditTime: 2020-08-21 08:54:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-my/doc/1.js
 */
let pathToRegexp = require('path-to-regexp');
console.log(pathToRegexp,'pathToRegexp')
// 把一个路径编译成一个正则表达式
let regxp = pathToRegexp.pathToRegexp('/home',[]);
console.log(regxp)
