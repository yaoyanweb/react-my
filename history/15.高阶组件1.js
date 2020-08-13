/*
 * @Author: your name
 * @Date: 2020-07-31 07:29:20
 * @LastEditTime: 2020-08-12 07:51:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-my/src/index.js
 */

import React from './react'; //核心库
import ReactDOM from './react-dom';
import './index.css';  // DOM渲染库

// 高阶组件其实是一个函数，传入一个组件，返回一个组件
// 高阶函数
function withLogger(OldComponent){
  
  return class extends React.Component {
    UNSAFE_componentWillMount(){
      this.start = Date.now();
    }
    componentDidMount(){
      console.log(Date.now() - this.start)
    }
    render(){
      return <OldComponent {...this.props} />
    }
  }
}
class Hello extends React.Component {
    start = null
    
    render(){
      return (
        <h1>11Hello</h1>
      )
    }
}

const NewHello = withLogger(Hello);

ReactDOM.render(
  <NewHello />
,
  document.getElementById('root')
);
