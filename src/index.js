import React from 'react'; //核心库
import ReactDOM from 'react-dom';  // DOM渲染库
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
     this.setState({number:this.state.number+1});
     console.log(this.state.number);
     this.setState({number:this.state.number+1});
     console.log(this.state.number);
   }

   
  
   render(){
     return (
       <div>
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
