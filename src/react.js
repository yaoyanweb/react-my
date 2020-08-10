/*
 * @Author: your name
 * @Date: 2020-07-27 08:02:40
 * @LastEditTime: 2020-08-10 08:42:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-my/src/react.js
 */
import {updateComponent} from './react-dom';




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
    // 不管你要不要更新，反正this.state 肯定会变，只不过有可能页面不更新而已。
    this.state = this.updateQueue.reduce((accumulate,current)=>{
      // accumulate 是当前的值   this.state 是最后赋的值
      let nextState = typeof current === 'function' ? current(accumulate):current;
      accumulate = {...accumulate, ...nextState};
      return accumulate;
    },this.state);
    // 清空更新队列
    this.updateQueue.length = 0;

    this.callbacks.forEach(cb => cb());
    this.callbacks = [];

    //如果有shouldComponentUpdate这个属性  并且为false 就不掉更新组件的方法
    if(this.shouldComponentUpdate&&!this.shouldComponentUpdate(this.props,this.state)){
      return;
    }

    // 如果UNSAFE_componentWillUpdate 有值就调它的方法
    if(this.UNSAFE_componentWillUpdate){
      this.UNSAFE_componentWillUpdate();
    }

    // 更新组件
    updateComponent(this);

    // componentDidUpdate 有值就调它的方法
    if(this.componentDidUpdate){
      this.componentDidUpdate();
    }
    
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