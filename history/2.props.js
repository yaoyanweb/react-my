import React from 'react'; //核心库
import ReactDOM from 'react-dom';  // DOM渲染库
import PropTypes from 'prop-types'
import './index.css';

class Person extends React.Component {
 static defaultProps = {
   name: '默认明爱'
 }
 static propTypes = {
    name: PropTypes.string.isRequired, //name 是一个字符串类型 必填字段
    gender: PropTypes.oneOf(['male','female']), // 枚举值 'male','female' 两个二选一
    hobby: PropTypes.arrayOf(PropTypes.string), // 字符串的数组
    position: PropTypes.shape({ // position 的值是一个对象 key x y 值都是number
      x:PropTypes.number,
      y:PropTypes.number
    }),
    // age是设置了一个函数 这是一个自定义 效验器
    // 属性对象  属性名称  组件名称   
    age(props, propName, componentName){
      let age = props[propName];
      if(age < 0 || age > 120){
        throw new Error('age 值必须在0-120之间')
      }
    }
 }
 render(){
   let { name, age , gender , hobby , position , friends } = this.props;
   return (
      <table  border="1">
          <thead>
              <tr>
                <td>姓名</td>
                <td>年龄</td>
                <td>性别</td>
                <td>爱好</td>
                <td>位置</td>
                <td>朋友</td>
              </tr>
          </thead>
          <tbody>
            <tr>
              <td>{name}</td>
              <td>{age}</td>
              <td>{gender}</td>
              <td>{hobby}</td>
              <td>{JSON.stringify(position)}</td>
              <td>{JSON.stringify(friends)}</td>
            </tr>
          </tbody>
      </table>
   )
 }
}
// 先创建一个props对象
let props = {
  // name:'测试',
  age:80,
  gender:'male',
  hobby: ['smoking','drinking'],
  position: {x:100,y:30} ,
  friends: [
    {name:'张', age:10}
  ]
}

/* 
 怎么去渲染类组件
 1、拿到props 
 
 2、创建实例
 
 3、
*/
let prop = props
let  compentInstance = new Person(props)
let  propsTypes = Person.propTypes;
if(PropTypes.name === PropTypes.string.isRequired){ 
  if(!props.name) {
    throw new Error('必填  ')
  }
}
let table = <Person {...props} />

ReactDOM.render(
  table
,
  document.getElementById('root')
);

/* 
为什么类型检查是静态属性
什么时候用静态属性 
什么时候用动态属性
【如果能用静态多属性就不要用动态属性】
1、使用方便  可以直接通过类名调用
2、只会有一份 节约内存 实例 属性，每new 一个实例， 都要创建一份 ，但是静态永久只有一份。
能共用就共用，节约资源。不能共用才 每人一份。

*/