/*
 * @Author: your name
 * @Date: 2020-07-31 07:29:20
 * @LastEditTime: 2020-08-17 20:18:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-my/src/index.js
 */

import React from 'react'; //核心库
import ReactDOM from 'react-dom';
import './index.css';  // DOM渲染库
import App from './App'
import { HashRouter as Router,Route } from 'react-router-dom';

/* 
  Router 是路由容器，放在最外层
  Route 代表路由配置 当前地址栏的路径是path的话 就渲染component

*/
ReactDOM.render(
  <Router>
    <>
      <Route path="/" component = { Home } />
      <Route path="/User" component = { User } />
      <Route path="/Profile" component = { Profile } />
    </>
  </Router>
)