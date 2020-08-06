
import React from './react'; //核心库
import ReactDOM from './react-dom';  // DOM渲染库
import './index.css';




/* 
1、事件处理中 this指针
  1.公共属性 箭头函数
  addFun = () => {}
  2.匿名函数
   <button onClick={()=>this.addFun()}>点击啊</button>
  3、bind 
  


*/
class Counter extends React.Component {
 
   constructor(props){
      super(props);  //  相当于  this.props = props;
      this.state = { // 只有在构造函数中才能给 this.state 赋值 
        number: 0,
        name:'姚哥哥'
      }
   }
   addFun(event,id){
     console.log(event,id,'event,id')
     this.setState({number:id})
   }
  
   /* 
    render 和 生命周期函数里的this 都指向组件实例
    因为 render 和 生命周期函数 都是实例调的 所以this肯定是指向实例的
   */ 
   render(){
     return (
       <div>
          <ul>
            {
              /* 
                函数传参写法 一
               */
            }
            <li onClick={(event) => this.addFun(event,'我是1')}>我是1</li>
            <li onClick={(event) => this.addFun(event,'我是2')}>我是2</li>
            <li onClick={(event) => this.addFun(event,'我是3')}>我是3</li>
          </ul>
          <button onClick={(event) =>this.addFun.bind(this,event,'我是点击啊')}>点击啊</button>
          <h2>{this.state.name}：{this.state.number}</h2>
          <SubCounter count={this.state.number} />
       </div>
     )
   }
}
class SubCounter extends React.Component {
 
  constructor(props){
     super(props);  //  相当于  this.props = props;
  }
  
  render(){
    return (
      <div>
         <h2>SubCounter:{this.props.count}</h2>
      </div>
    )
  }
}

ReactDOM.render(
  <Counter/>
,
  document.getElementById('root')
);

/* 
绑定事件的时候 虚拟dom jsx绑定和原生dom不一样

*/
