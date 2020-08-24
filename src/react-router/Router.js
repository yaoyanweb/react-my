/*
 * @Author: your name
 * @Date: 2020-08-24 07:36:49
 * @LastEditTime: 2020-08-24 08:13:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-my/react-router/Router.js
 */
import React from 'react';
import RouterContext from './RouterContext';
import history from '../src/history';
class Router extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            location:props.history.location // 代表当前的路径
        }
    };

    // 希望在路径发生变化的时候，重新刷新Router组件，让里面的组件重新匹配
    componentDidMount(){
        this.unlisten = this.props.history.listen(({location})=>{
            this.setState({location});
        })
    }
    componentWillUnmount(){
        this.unlisten();
    }
    render(){
        let value = {
            history:this.props.history,
            location: this.state.location
        };
        return (
            <RouterContext.Provider value={value}>
                {this.props.children}
            </RouterContext.Provider>
        )
    }
}

export default Router;