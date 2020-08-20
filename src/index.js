/*
 * @Author: your name
 * @Date: 2020-07-31 07:29:20
 * @LastEditTime: 2020-08-20 08:25:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-my/src/index.js
 */

import React from 'react'; //核心库
import ReactDOM from 'react-dom';
import './index.css';  // DOM渲染库
import Home from './components/Home';
import User from './components/User';
import Profile from './components/Profile';
import { BrowserRouter as Router,Route, Switch, Redirect } from './react-router-dom';

/* 
  Router 是路由容器，放在最外层
  Route 代表路由配置 当前地址栏的路径是path的话 就渲染component
  router 配置有三种 1 手工写代码 2 约定式  umi  3 配置式 routes.json antdesignpro

*/
ReactDOM.render(
  <Router>
    <>
      
      <Switch>
      {/**Home 之所以一直存在 是因为Route 是按前置匹配的 */}
      <Route path="/home" exact={true}  component = { Home } />
      <Route path="/user" component = { User } />
      <Route path="/profile" component = { Profile } />
      <Redirect from="/" to="/home" />
    </Switch>
    </>
  </Router>,
  document.getElementById('root')
)