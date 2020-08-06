/*
 * @Author: your name
 * @Date: 2020-07-31 07:29:20
 * @LastEditTime: 2020-08-06 08:00:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-my/src/index.js
 */

import React from 'react'; //核心库
import ReactDOM from 'react-dom';  // DOM渲染库
import './index.css';


class Counter extends React.Component {
   static defaultProps = {name:'珠峰架构'}
   constructor(props){
     super(props);
     this.props = props;
     this.state = {number: 0};
     console.log('1. Counter constructor 构造函数');
   }

   UNSAFE_componentWillMount() {
    console.log('2. Counter componentWillMount 组件将要挂载');
   }
   handClick = () => {
     this.setState({number: this.state.number + 1})
   }
   shouldComponentUpdate(nextProps,nextState){
    console.log('5. Counter shouldComponentUpdate 询问用户组件是否更新，是否需要重新渲染');
    return true;
    // return nextState.number % 2 === 0; // nunber为奇数就更新 偶数就不更新
   }
   UNSAFE_componentWillUpdate(){
    console.log('6. componentWillUpdate 组件将要更新');
   }
   componentDidUpdate(){
    console.log('7. componentDidUpdate 组件更新完成');
   }
   render(){
    console.log('3. Counter componentDidMount 组件渲染');
    return (
      <div>
        <p>{this.state.number}</p>
        <button onClick={this.handClick}>+</button>
        <hr />
        {
          this.state.number > 100 ? null : 
          <SubCounter count = {this.state.number} />
        }
      </div>
    )
   }

   componentDidMount() {
    console.log('4. Counter componentDidMount 组件挂载完成');
   }
}

class SubCounter extends React.Component {
  constructor(props){
    super(props);
    this.state = { count:0 }
  }
  
  // 
  componentWillUnmount(){
    console.log('3. SubCounter  componentWillReceiveProps 组件将要销毁');
  }

  // 当父组件将要传递子组件新属性的时候，子组件会触发此钩子
  componentWillReceiveProps(){
    console.log('1. SubCounter  componentWillReceiveProps 组件接收新的属性');
  }

  /* 
    这是一个静态方法 
    什么时候需要用到静态方法呢？
    当一个方法不需要实例的时候 可以所有实例共享的时候就可以用静态的 
    能用静态的就不要用 实例的，因为静态的节约内存
  */
 
  /**
   * @param {type} nextProps 新的属性对象
   * @param {type} prevState 老的状态对象 
   */
  /* 当你需要通过属性去计算状态的时候 就可以用这个函数 */
  static getDerivedStateFromProps(nextProps,prevState){
    let { count } = nextProps;  // { count:1 }
    return { count:prevState.count + count}; // 返回新的状态对象

  }

  render(){
    console.log('2. SubCounter  render 子组件render');
    return (
      <div>{this.state.count}</div>
    )
  }
}

ReactDOM.render(
  <Counter />
,
  document.getElementById('root')
);
