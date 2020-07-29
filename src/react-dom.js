/*
 * @Author: your name
 * @Date: 2020-07-27 18:30:23
 * @LastEditTime: 2020-07-29 09:05:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-my/src/react-dom.js
 */
export function uodateComponent(componentInstance){
    let element = componentInstance.render(); //根据新的属性和状态得到新的element
    let {props,type} = element;
    let dom = createDOM(props,type);// 根据新的element 得到新的DOM元素
    /**
     * componentInstance.dom.parentNode => 是root Div
     * 把老的DOM节点替换成新的DOM节点
     */
    componentInstance.dom.parentNode.replaceChild(dom, componentInstance.dom);
}



/**
 * @param {type} element 元素容器 
 * @param {type} container 父节点容器
 * @param {type} componentInstance 当前实例
 */
function render(element,container){
    
    if(typeof element === 'string' || typeof element === 'number' ){
        return container.appendChild(document.createTextNode(element))
    }

    let {props,type} = element; // 当type为Counter组件类型的时候 
    let isReactComponent = type.isReactComponent;
    let componentInstance;
    if(isReactComponent){ //判断 知道了这里是不是一个class组件
        componentInstance = new type(props);
        element = componentInstance.render();
        type = element.type;  // 重新得到这个React 元素的类型
        props = element.props; // 和属性对象
      
    }else if(typeof type === 'function'){ //说明是一个函数组件
        element = type(props); // 函数组件执行后返回一个React元素
        type = element.type; // 重新得到这个React元素类型
        props = element.props; // 和属性对象
    }
    let dom = createDOM(props,type);
    if(isReactComponent&&componentInstance){
        /* 
            如果当前渲染的是一个类组件，我们就让这个类组件的试了dom指向
            这个类组件创建出来的真是DOM
        */

        componentInstance.dom = dom;
    }
    container.appendChild(dom);
}
function createDOM(props,type) {
    let dom = document.createElement(type);
    for(let propName in props){ //  循环每个属性
        if(propName === 'children'){
            props.children.forEach(child => render(child, dom))
        }else if(propName === 'className'){
            dom.className = props[propName];
        }else if(propName === 'style'){
            let styleObj = props[propName];
            for(let attr in styleObj){
                dom.style.color = styleObj[attr];
            }
        } else if(propName.startsWith('on')){
           
            dom[propName.toLowerCase()] = props[propName];
        }else {
            dom.setAttribute(propName,  props[propName])
        }
    };
    return dom;
}

export default {
    render
}