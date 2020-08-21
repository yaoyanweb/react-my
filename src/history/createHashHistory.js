/*
 * @Author: your name
 * @Date: 2020-08-20 08:31:51
 * @LastEditTime: 2020-08-21 08:12:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-my/src/history/createHashHistory.js
 */
/*
import { createBrowserHistory } from 'history';
import default from '../react';
import history from '../history';
import history from '../history';
import history from '../history';
 * @Author: your name
 * @Date: 2020-08-20 08:32:20
 * @LastEditTime: 2020-08-21 07:54:36
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

function createHashHistory(){
    const listeners = [];
    let state = {};
    function listen(listen){
        listeners.push(listen);
    }

    function setState(nextState){
        Object.assign(history,nextState);  
        listeners.forEach(listen => listen()); 
    }
    window.addEventListener('hashchange',()=>{
        let pathname = window.location.hash.slice(1);
        setState({...state,pathname});
    })

    /**
     * @param {type} path 路径 
     * @param {type} state 路由状态  比如  路由传参的  params 
     */
    function push(path){
        const action = 'PUSH';
        let pathname,state;
        // 所以要进行判断
        if(typeof path === 'string'){
            pathname = path;
        }else if(typeof path === 'object'){
            pathname = path.name;
            state = path.state;
        }
        window.location.hash = pathname;// 改变hash的值
       
    }
    
    let history = {
        length:globalHistory.length,
        action:'POP',
        location:{
            pathname:window.location.pathname,
            state:globalHistory.history.state,
            // 一下四个都是跳转方法
            push,
            listen
        }
    }

    return history;
 }

 export default createHashHistory;