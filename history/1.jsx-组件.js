import React from 'react'; //核心库
import ReactDOM from 'react-dom';  // DOM渲染库
import './index.css';

import * as serviceWorker from './serviceWorker';
/* 
  什么叫React元素
  是React应用的最小单位，它描述了你在屏幕上看到的内容
  React元素的本质是一个普通的 js对象
  ReactDom会保证浏览器中的Dom和你的React元素一致
*/
/* 
  jsx表达式  
  表达式就是变量和操作符的集合，可以计算结果
  在jsx中任意使用表达式，表达式要放在大括号里
*/
let h1 = <h1>姚哥哥<div>哈哈哈哈</div></h1>
console.log(h1);

/* 
  React如何区分是jsx元素还是表达式呢？
  < 开头的就 jsx元素 {} 就是表达式
  给jsx赋值的时候避免使用js关键字
  如果一个React元素 属性名是class的话，要改名className
  在列表中的每一个元素都应该有一个唯一的key属性
  原因是为了高效的dom diff
*/



/* ---------------- */
/* 
  React 元素都是不可变对象，改变需要重新渲染
  React 只会更新必要部分-> 如果新老的虚拟dom是一样的 则不做任何改动
*/


class Welcome2 extends React.Component {
  render(){
    return <h1>姚哥哥2</h1>
  }
}


let element = <Welcome name='标题啊'/>
console.log(element);
function Welcome(){
  return <h1>姚哥哥</h1>
}
console.log(Welcome2,'Welcome2')
ReactDOM.render(
  <Welcome2/>
,
  document.getElementById('root')
);

//如果你想让你的应用离线工作并且加载速度更快，你可以改变
//取消注册()到下面的注册()。注意，这带来了一些缺陷。
//了解更多关于服务工作者的信息:https://bit.ly/CRA-PWA
serviceWorker.unregister();
