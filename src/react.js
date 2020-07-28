/* 
JS 其实没有类的概念
class 编译之后也是一个函数，为了区分这个函数是类组件 还是函数组件，
增加isReactComponent 属性 作为标记

*/


export class Component {
  static isReactComponent = true;
  constructor(props){
    this.props = props;
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