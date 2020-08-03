/*
 * @Author: your name
 * @Date: 2020-07-31 07:29:20
 * @LastEditTime: 2020-08-03 08:56:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-my/src/index.js
 */

import React from 'react'; //核心库
import ReactDOM from 'react-dom';  // DOM渲染库
import './index.css';

class Form extends React.Component {
  constructor(props){
    super(props);
    this.textInput = React.createRef();
  }
  getFocus(){
    console.log( this.textInput.current) 
  }
  render(){
    return (
      <div>
        <TextInput ref = {this.textInput}/>
        <button  onClick={this.getFocus}>获取焦点</button>
      </div>
    )
  }
}

class TextInput extends React.Component {
  constructor(props){
    super(props);
    this.input = React.createRef();
  }
  getFocus(){
    console.log( this.input.current);
    this.input.current.focus();
  }
  render(){
    return <input ref = { this.input } />
  }
}

ReactDOM.render(
  <Form />
,
  document.getElementById('root')
);

/* 
绑定事件的时候 虚拟dom jsx绑定和原生dom不一样

*/
