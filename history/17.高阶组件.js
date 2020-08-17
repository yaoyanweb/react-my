/*
 * @Author: your name
 * @Date: 2020-07-31 07:29:20
 * @LastEditTime: 2020-08-17 07:47:34
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
          {this.props.render(this.state)}
        </div>
      )
    }
}

function withMouseTracker(OldComponent){
  return (props)=> <MouseTracker render={
    value => <OldComponent {...props} {...value} />
  } />
}

let NewMouseTracker = withMouseTracker(props => (
  <>
   <h1>{props.title}</h1> 
   <h1>移动鼠标</h1>
   <p>当前坐标是{props.x}, {props.y}</p>
  </>
));

ReactDOM.render(
  <NewMouseTracker title="follow"  />,document.getElementById('root')
);

// 第二种 通过render

/* ReactDOM.render(
  <MouseTracker render={
    props => (
      <>
       <h1>移动鼠标</h1>
       <p>当前坐标是{props.x}, {props.y}</p>
      </>
    )
  } />
  ,
    document.getElementById('root')
  );
 */




// 第一种 组件的儿子 children是一个函数
/* ReactDOM.render(
<MouseTracker>
 
 {
   props => (
     <>
      <h1>移动鼠标</h1>
      <p>当前坐标是{props.x}, {props.y}</p>
     </>
   )
 }

</MouseTracker>
,
  document.getElementById('root')
);
 */