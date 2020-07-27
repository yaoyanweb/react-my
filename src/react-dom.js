function render(element,container){
    let {props,type} = element;
    if(typeof element === 'string' || typeof element === 'number' ){
        return container.appendChild(document.createTextNode(element))
    }
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
    }
   
    container.appendChild(dom);
}

export default {
    render
}