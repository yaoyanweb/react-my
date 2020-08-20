/*
import { createBrowserHistory } from 'history';
import default from '../react';
import history from '../history';
import history from '../history';
import history from '../history';
 * @Author: your name
 * @Date: 2020-08-20 08:32:20
 * @LastEditTime: 2020-08-20 08:56:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-my/src/history/createBrowserHistory.js
 */

 /* 
        action: "POP"
        block: ƒ block(prompt)  这个用得不多 先不写
        createHref: ƒ createHref(location)
        go: ƒ go(n)
        goBack: ƒ goBack()
        goForward: ƒ goForward()
        length: 37
        listen: ƒ listen(listener)
        location: {pathname: "/user", search: "", hash: "#/", state: undefined}
        push: ƒ push(path, state)
        replace: ƒ replace(path, state)
 
 */

 function createBrowserHistory(){
    const globalHistory = window.history;
    function setState(){
            
    }
    // 往路由里面加入历史记录
    function push(path,state){
        const action = 'PUSH';
        const location = {
            pathname:path,state
        }
        globalHistory.pushState(state,null,path);
        setState({action,location})
    }
    // 跳转下几步
    function go(step){
        globalHistory.go(step);
    };

    // 返回上一步
    function goBack(){
        globalHistory.go(-1);
    }

    // 进入下一步
    function goForward(){
        globalHistory.go(1);
    }
    let history = {
        length:globalHistory.length,
        action:'POP',
        location:{
            pathname:window.location.pathname,
            state:globalHistory.history.state,
            // 一下四个都是跳转方法
            push,
            go,
            goBack,
            goForward
        }
    }

    return history;
 }

 export default createBrowserHistory;