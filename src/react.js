/*
 * @Author: your name
 * @Date: 2020-07-27 08:02:40
 * @LastEditTime: 2020-08-04 08:24:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-my/src/react.js
 */
import {uodateComponent} from './react-dom';




/* 
JS 其实没有类的概念
class 编译之后也是一个函数，为了区分这个函数是类组件 还是函数组件，
增加isReactComponent 属性 作为标记

*/


export class Component {
  static isReactComponent = true; // 标记为class组件
  constructor(props){
    this.props = props;
    this.updateQueue = []; // 这是放着临时更新队列
    this.isBatchingUpdate = false; // 表示当时是否处于批量更新模式
    this.callbacks = [];
    this.refs = {}; 
  }
  // 部分状态的意思
  setState(partialState,callback){
    if(callback){
      this.callbacks.push(callback);
    }
    this.updateQueue.push(partialState);
    if(!this.isBatchingUpdate){
      this.forceUpdate();
    }
  }
  forceUpdate(){
    if(this.updateQueue.length === 0){
      return;
    }
    this.state = this.updateQueue.reduce((accumulate,current)=>{
      // accumulate 是当前的值   this.state 是最后赋的值
      let nextState = typeof current === 'function' ? current(accumulate):current;
      accumulate = {...accumulate, ...nextState};
      return accumulate;
    },this.state);
    // 清空更新队列
    this.updateQueue.length = 0;

    // 更新组件
    uodateComponent(this);
    this.callbacks.forEach(cb => cb());
    this.callbacks = [];
  }
}



export function createElement(type,config = {},...children){
    let props  = {...config, children};
    return {
      type,
      props
    }
  }

export function forwardRef(FunctionComponent){
    return class extends Component {
      render(){
        // this.props.ref 就是把这个函数组件变成class 组件 再通过回调方法 把props 和 ref 两个参数传递过来

        // 所以会返回一个类组件，类组件才能接收ref
        // 类组件render渲染的时候，会用函数组件来进行渲染
        return FunctionComponent(this.props,this.props.ref)
      }
    }
}
  
export function createRef(){
  return {current: null};
}

export default {
  createElement,
  Component,
  createRef,
  forwardRef
}