/*
 * @Author: your name
 * @Date: 2020-08-24 08:49:52
 * @LastEditTime: 2020-08-24 09:04:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-my/src/react-router/matchPath.js
 */

 import pathToRegexp, { compile } from 'path-to-regexp';


function compilePath(path,options){
    const keys = [];
    const regexp = pathToRegexp(path,keys,options);
    return {regexp, keys};
}


 /**
  * @param {type} pathname 当前路径
  * @param {type} options={} 选项 path exact
  */
 function matchPath(pathname,options={}){
    let {path='/' ,exact=false, strict=false, sensitive=false } = options;
    let {regexp, keys} = compilePath(path,{
         end:exact,
         strict,
         sensitive
     });
     const match = regexp.exec(pathname);
     if(!match) return null; //如果不匹配，那就返回null

     const[url, ...values] = match;

 }

 let result = matchPath('/users/100', {path: '/users'})