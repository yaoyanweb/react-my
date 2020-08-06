/*
 * @Author: your name
 * @Date: 2020-07-31 07:29:20
 * @LastEditTime: 2020-08-03 08:22:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-my/src/index.js
 */

import React from './react'; //核心库
import ReactDOM from './react-dom';  // DOM渲染库
import './index.css';


/* 

 ref reference 引用的意思

 ref 允许我们访问DOM节点 或者在React 中创建的组件实例

 ref有三种方式
  可以是  1）字符串  比如 <input ref = 'a' />
            组件有一个内置指针叫ref key是字符串 a b 值就是虚拟DOM在浏览器中的真是DOM
         2）函数  比如  <input  ref = {inst => this.a = inst} /> 
            里面是一个函数  react-dom.js 里面调取这个函数  props.ref.call(componentInstance,dom);
         
          *****以上两种现在不推荐用，现在主流的是用第三种*****
          为什么呢？ 
          1、类似于 hooks useRef 和hooks更为贴切
          2、16版本更新进来的 比较新
          3、与上下文无关不需要this,方便传递
          4、支持函数组件 （上两种是不支持函数组件的） 主要是为了拥抱函数式编程
           
          
          3）对象 比如   this.b = React.createRef();  <input  ref = {this.a} />

*/

class Calculator extends React.Component {
  constructor(props){
    super(props);
    this.a = React.createRef();
    this.b = React.createRef();
    this.result = React.createRef();
  }
  handleAdd = (event) => {
    let a = this.a.current.value;
    let b = this.b.current.value;
    this.result.current.value = parseFloat(a)+parseFloat(b)
  }
   render(){ 
     return (
       <div>
          <input  ref = {this.a} />
          +
          <input  ref = {this.b} />
          
          <button onClick={this.handleAdd}>
          =
          </button>
          <input ref = {this.result} />
       </div>
     )
   }
}

ReactDOM.render(
  <Calculator />
,
  document.getElementById('root')
);

/* 
绑定事件的时候 虚拟dom jsx绑定和原生dom不一样

*/
