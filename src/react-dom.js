function render(element,container){
    
    if(typeof element === 'string' || typeof element === 'number' ){
        return container.appendChild(document.createTextNode(element))
    }

    let {props,type} = element;
    let isReactComponent = type.isReactComponent;
    if(isReactComponent){ //判断 知道了这里是不是一个class组件
        let componentInstance = new type(props);
        element = componentInstance.render();
        type = element.type;  // 重新得到这个React 元素的类型
        props = element.props; // 和属性对象
      
    }else if(typeof type === 'function'){ //说明是一个函数组件
        element = type(props); // 函数组件执行后返回一个React元素
        type = element.type; // 重新得到这个React元素类型
        props = element.props; // 和属性对象
    }
    container.appendChild(createDOM(props,type));
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
        }else {
            dom.setAttribute(propName,  props[propName])
        }
    };
    return dom;
}

export default {
    render
}