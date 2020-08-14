/*
 * @Author: your name
 * @Date: 2020-07-31 07:29:20
 * @LastEditTime: 2020-08-13 20:06:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-my/src/index.js
 */

import React from 'react'; //核心库
import ReactDOM from 'react-dom';
import './index.css';  // DOM渲染库
class MouseTracker extends React.Component {
    constructor(props){
      super(props);
      this.state = {x:0,y:0};
    }
    handleMove =(e) => {
      this.setState({
        x:e.clientX,
        y: e.clientY
      })
    }
    render(){
      return (
        <div onMouseMove = {this.handleMove}>
        
        </div>
      )
    }
}


ReactDOM.render(
<MouseTracker>
  <h1>{this.props.children}</h1>
  <h1>移动鼠标</h1>
  <p>当前坐标是{this.state.x}, {this.state.y}</p>

</MouseTracker>
,
  document.getElementById('root')
);
