/*
 * @Author: your name
 * @Date: 2020-08-20 08:06:43
 * @LastEditTime: 2020-08-20 08:16:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-my/src/react-router-dom/BrowserRouter.js
 */
import React from 'react';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
let history = createBrowserHistory();
export default function(props){
    return <Router history={history} children={props.children} />
}
