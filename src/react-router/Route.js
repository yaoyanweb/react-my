/*
 * @Author: your name
 * @Date: 2020-08-24 07:36:36
 * @LastEditTime: 2020-08-24 08:44:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-my/react-router/Route.js
 */
import { match } from 'path-to-regexp';
import React from 'react';
import RouterContext from './RouterContext';

class Route extends React.Component {
    render(){
        return (
            <RouterContext.Consumer>
                {
                    context => {
                        const location = context.location;  // 拿到当前的地址信息
                        let {component,path,exact} = this.props;
                        const  match = location.pathname === path; // 用location 和 当前Route 的 path进行匹配得到匹配结果
                        const props = {...context,location,match};
                        const element = React.createElement( )
                        return (
                            element
                        );
                    }
                }
            </RouterContext.Consumer>
        )
    }
}