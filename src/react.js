/* 
JS 其实没有类的概念
class 编译之后也是一个函数，为了区分这个函数是类组件 还是函数组件，
增加isReactComponent 属性 作为标记

*/


export class Component {
  static isReactComponent = true; // 标记为class组件
  constructor(props){
    this.props = props;
  }
  // 部分状态的意思
  setState(partialState){

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