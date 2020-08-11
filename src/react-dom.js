/*
 * @Author: your name
 * @Date: 2020-07-27 18:30:23
 * @LastEditTime: 2020-08-11 08:22:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-my/src/react-dom.js
 */
export function uodateComponent(componentInstance){
    let element = componentInstance.render(); //根据新的属性和状态得到新的element
    let {props,type} = element;
    let newDom = createDOM(props,type,componentInstance);// 根据新的element 得到新的DOM元素
    /**
     * componentInstance.dom.parentNode => 是root Div
     * 把老的DOM节点替换成新的DOM节点
     */
    componentInstance.dom.parentNode.replaceChild(newDom, componentInstance.dom);

    // 替换后 新的dom节点就相当于老的节点
    componentInstance.dom = newDom;
}



/**
 * @param {type} element 元素容器 
 * @param {type} container 父节点容器
 * @param {type} componentInstance 当前实例
 */
function render(element,container,componentInstance){
    if(typeof element === 'string' || typeof element === 'number' ){
        return container.appendChild(document.createTextNode(element))
    } 

    let {props,type} = element; // 当type为Counter组件类型的时候 
    let isReactComponent = type.isReactComponent;
    if(isReactComponent){ //判断 知道了这里是不是一个class组件
        componentInstance = new type(props);
        // 让组件支持ref
        if(props.ref){
            props.ref.current = componentInstance;
        }


        // 加入生命周期函数
        if(componentInstance.UNSAFE_componentWillMount){
            componentInstance.UNSAFE_componentWillMount();
        }

        element = componentInstance.render();
        element = Array.isArray(element)?element[0]:element;
        type = element.type;  // 重新得到这个React 元素的类型
        props = element.props; // 和属性对象
      
    }else if(typeof type === 'function'){ //说明是一个函数组件
        element = type(props); // 函数组件执行后返回一个React元素
        element = Array.isArray(element)?element[0]:element;
        type = element.type; // 重新得到这个React元素类型
        props = element.props; // 和属性对象
    }
    /* 
        如果说类组件实例 渲染出来的element 的类型也有isReactComponent
        这个属性，说明它是一个类组件。
     */
    if((type&&type.isReactComponent) || typeof type === 'function'){
        return render(element,container,componentInstance);
    }
    let dom = createDOM(props,type,componentInstance);
    if(isReactComponent&&componentInstance){
        /* 
            如果当前渲染的是一个类组件，我们就让这个类组件的试了dom指向
            这个类组件创建出来的真是DOM
        */

        componentInstance.dom = dom;
    }
    container.appendChild(dom);
    /* 
        如果它是一个class组件并且
        它有这个实例，并且它有componentDidMount这个方法
    */
    if(isReactComponent&&componentInstance&&componentInstance.componentDidMount){
        componentInstance.componentDidMount();
    }
}

/**
 * 合成事件
 * 在事件处理函数执行前 要把批量更新模式设置为true
 * 这样的话 在函数执行过程中就会直接更新界面和状态了，只会缓存新的状态到updateQueue
 * 等事件处理函数结束后才会进行实际更新。 
 */

function addEvent(dom,eventType,listener,componentInstance){
    eventType = eventType.toLowerCase();
    let eventStore = dom.eventStore || (dom.eventStore = {});

    /* 比如  eventType['onclick'] = {listener , componentInstance} */
    eventStore[eventType] = {listener , componentInstance};
    document.addEventListener(eventType.slice(2),dispatchEvent,false);
}

function dispatchEvent(event){ //event 是原生dom事件
    let {type, target} = event; // 取出事件的类型 click 事件源 比如是点了按钮 按钮就是事件源

    /* 这个while循环是为了模拟事件冒泡 */
    while(target){
        let { eventStore } = target;
        if(eventStore){
            let {listener , componentInstance} = eventStore[`on${type}`]

            if(listener){ // 如果有监听函数的话
                if(componentInstance){
                    componentInstance.isBatchingUpdate = true;
                }
                listener.call(null, event);
                if(componentInstance){
                    componentInstance.isBatchingUpdate = false;
                    componentInstance.forceUpdate();
                }

            }
        }
        target = target.parentNode;
    }
}
function createDOM(props,type,componentInstance) {
    let dom = document.createElement(type);
    for(let propName in props){ //  循环每个属性
        if(propName === 'children'){
            props.children.forEach(child => render(child, dom,componentInstance))
        }else if(propName === 'className'){
            dom.className = props[propName];
        }else if(propName === 'style'){
            let styleObj = props[propName];
            for(let attr in styleObj){
                dom.style.color = styleObj[attr];
            }
        } else if(propName.startsWith('on')){
            /* 注释掉 把现在的原生事件变成合成事件 */
            // dom[propName.toLowerCase()] = props[propName];

            /* dom绑定的真实dom元素
              propName是传过来的事件，
              目前的例子里面就是
              propName =>onclick 事件名称
              listener => handleClick  函数名称
              componentInstance => Clock 组件实例
            */
            addEvent(dom,propName,props[propName],componentInstance)
        }else {
            dom.setAttribute(propName,  props[propName])
        }
    };
    if(props&&props.ref){
        if(typeof props.ref === 'string'){
            /* componentInstance  是组件实例 */
            componentInstance.refs[props.ref] = dom;
        } else if(typeof props.ref === 'function'){
            props.ref.call(componentInstance,dom);
        } else if(typeof props.ref === 'object'){
            props.ref.current = dom;
        }
    }
    return dom;
}

export default {
    render
}