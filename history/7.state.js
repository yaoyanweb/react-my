import React from 'react'; //核心库
import ReactDOM from 'react-dom';  // DOM渲染库
import './index.css';
/* 
 组件状态
 组件数据源有两个
 1、父组件传递给子组件的 【不可修改】
 2、组件内部的状态 是内部初始化的，改变状态唯一的方式 就是 setState

 另外属性和 状态都会影响视图，他们改变了都会引起视图的更新

*/


class Clock extends React.Component {
  /* 
    第一种定义初始状态的方法
  */
  /* state = { // 只有在构造函数中才能给 this.state 赋值 
    date: new Date()
  } */
   constructor(props){
     /* 
      ES6 要求，子类的构造函数必须执行一次 super() 函数。
      super() 就相当于call 里面的实参 就是要传递给 父类的props
     */
    console.log(props,'props')
      super(props);  //  相当于  this.props = props;
      console.log(this.super,'super')

      /* 
        第二种定义初始状态的方法
      */
      this.state = { // 只有在构造函数中才能给 this.state 赋值 
        date: new Date()
      }
      // 其他地方要想改变只能调用setSate
   }

   componentWillMount(){
    //  组件将要挂载

   }

   componentDidMount(){
    //  组件挂载完成
    this.timer = setInterval(()=>{
      // console.log(this.state)
      this.setState({date:new Date()});
    },1000)
   }
   render(){
     return (
       <div>
          <h1>姚哥哥</h1>
          <h2>当前时间为：{this.state.date.toLocaleString()}</h2>
       </div>
     )
   }
}

ReactDOM.render(
  <Clock/>
,
  document.getElementById('root')
);

