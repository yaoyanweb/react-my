/*
 * @Author: your name
 * @Date: 2020-07-31 07:29:20
 * @LastEditTime: 2020-08-04 08:22:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-my/src/index.js
 */

import React from './react'; //核心库
import ReactDOM from './react-dom';  // DOM渲染库
import './index.css';


/* 
  你不能在函数组件使用ref属性，因为他们没有实例
  执行完了就销毁
  如何给函数组件加ref ?  forwardRef 转发 ref
  ref 转发是一项将ref 自动的通过组件传递到子组件的技巧
  refs 转发 允许某些函数组件接收ref 并向下传递


*/

function TextInput(props,ref){
  // input 在创建真是DOM
  return <input ref = {ref} />
}

const ForwardTextInput = React.forwardRef(TextInput);



class Form extends React.Component {
  constructor(props){
    super(props);
    this.textInput = React.createRef();
  }
  getFocus = () => {
    console.log( this.textInput.current) 
    this.textInput.current.value = '哈哈哈哈';
    this.textInput.current.focus();
  
  }
  render(){
    return (
      <div> 
        <ForwardTextInput ref = {this.textInput}/>
        <button  onClick={this.getFocus}>获取焦点11</button>
      </div>
    )
  }
}

/* 
 Warning: Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?
*/
// function TextInput(props){
//   return  <input  />
// }


// class TextInput extends React.Component {
//   constructor(props){
//     super(props);
//     this.input = React.createRef();
//   }
//   getFocus = () => {
//     console.log( this.input.current);
//     this.input.current.focus();
//     this.input.current.value = '哈哈哈哈';
//   }
//   render(){
//     return <input ref = { this.input } />
//   }
// }

ReactDOM.render(
  <Form />
,
  document.getElementById('root')
);

/* 
绑定事件的时候 虚拟dom jsx绑定和原生dom不一样

*/
