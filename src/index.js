/*
 * @Author: your name
 * @Date: 2020-07-23 07:42:07
 * @LastEditTime: 2020-07-30 08:50:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-my/src/index.js
 */
import React from './react'; //核心库
import ReactDOM from './react-dom';  // DOM渲染库
import './index.css';
/* 
1。不要直接修改state，直接修改不能刷新页面setState 包含了刷新界面的操作，
就是让真是DOM和最新虚拟DOM保持一致。
2、setState 的更新可能被合并 说明setState里传的对象会跟老的对象进行合并，
并不会直接覆盖。 
【发生改变遵循以下三条规则】
1）、原来 老的state有就更新
2）、老的没有就添加
3）、老的有 新的没有维持原值
3、面试必问 setState 的更新可能是异步
在时间处理函数里setState的时候 并不会直接修改状态，而是先把partialState放入一个数组
缓存起来，等事情执行结束

*/
class Clock extends React.Component {
 
   constructor(props){
      super(props);  //  相当于  this.props = props;
      this.state = { // 只有在构造函数中才能给 this.state 赋值 
        number: 0,
        name:'姚哥哥'
      }
   }
   handleClick = ()=>{
     console.log(this.state,'this.state');
     /* 
      如果想要同步 setState支持第二个函数放一个callback  回调 
     */
     /* this.setState({number:this.state.number+1},()=>{
      console.log(this.state.number);
     });
    
     this.setState({number:this.state.number+1},()=>{
      console.log(this.state.number);
     }); */

     /* 
      这样写 setState 就会分别执行两次  不会集合在一起  最后优化执行
    【 setState() 不仅能够接受一个对象作为参数，还能够接受一个函数作为参数。
      函数的参数即为state的前一个状态及props 】
     */
     this.setState(prevState => ({number:prevState.number +1}),()=>{
      console.log(this.state.number,'1');
     });
     console.log(this.state.number,'2');
     this.setState(prevState => ({number:prevState.number +1}),()=>{
      console.log(this.state.number,'3');
     });
     console.log(this.state.number,'4');
     /* 
        打印顺序是  2，4，1，3
        因为 setState是异步 所以callback 里面的 后打印
     */


    
   }

   handleDiv = (event) => {
      console.log(event,'handleDiv');
   }
  
   render(){
     return (
       <div>
          <button onClick={this.handleDiv}>增加handleDiv</button>
          <button onclick={(event)=>{console.log(event)}}>增加handleDiv111</button>
         
          <button onClick={this.handleClick}>增加</button>
          <h2>{this.state.name}：{this.state.number}</h2>
       </div>
     )
   }
}

ReactDOM.render(
  <Clock/>
,
  document.getElementById('root')
);

/* 
绑定事件的时候 虚拟dom jsx绑定和原生dom不一样

*/
