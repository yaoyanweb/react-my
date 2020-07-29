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
  }
  // 部分状态的意思
  setState(partialState){
    this.updateQueue.push(partialState);
    if(!this.isBatchingUpdate){
      this.forceUpdate();
    }
  }
  forceUpdate(){
    this.state = this.updateQueue.reduce((accumulate,current)=>{
      let nextState = typeof current === 'function' ? current(this.state):current;
      accumulate = {...accumulate, ...nextState};
      return accumulate;
    },this.state);
    // 清空更新队列
    this.updateQueue.length = 0;

    // 更新组件
    uodateComponent(this);
  }
}



export function createElement(type,config = {},...children){
    let props  = {...config, children};
    return {
      type,
      props
    }
  }


export default {
  createElement,
  Component
}