/*
 * @Author: your name
 * @Date: 2020-08-20 08:06:43
 * @LastEditTime: 2020-08-20 08:17:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-my/src/react-router-dom/BrowserRouter.js
 */
import React from 'react';
import { Router } from 'react-router';
import { createHashHistory } from 'history';
let history = createHashHistory();
export default function(props){
    return <Router history={history} children={props.children} />
}
