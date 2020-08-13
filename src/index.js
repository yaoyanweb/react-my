/*
 * @Author: your name
 * @Date: 2020-07-31 07:29:20
 * @LastEditTime: 2020-08-13 08:54:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-my/src/index.js
 */

import React from 'react'; //核心库
import ReactDOM from 'react-dom';
import './index.css';  // DOM渲染库



/* 
  高阶组件可以实现逻辑服用，但如果要复用逻辑比较多的话就比较难以维护了
  高阶组件基本没有自己的dom结构，也没必要有
*/
/* 
  受控组件： input框的value值受状态控制
  非受控组件： input框的value值不受状态控制

*/

const fromLocalStorage = function(OldComponent,filedName){
  return class extends React.Component {
    state = { value: '' };
    handChange = (e) =>{
      localStorage[filedName] = e.target.value;
      this.setState({value:e.target.value});
    }
    componentDidMount(){
      this.setState({value : localStorage[filedName]});
    }
    render(){
      return <OldComponent value={this.state.value}  handChange = {this.handChange} />
    }
  }
}

const fromAjax = function(OldComponent) {  
  return class extends React.Component {
    state = { value: '' };
    componentDidMount(){
      fetch('/aic.json')
        .then(response=> response.json())
        .then(data=>{
          let value = data[this.props.value];
          this.setState({value})
        })
    }
    render(){
      return <OldComponent value = { this.state.value} handChange={this.props.handChange} />
    }
  }
  
}

class Field extends React.Component {
 
  render(){
    return <input  value={this.props.value} onChange={this.props.handChange} />
  }
}
const AjaxUserName = fromAjax(Field);
const LocalAjaxUserName = fromLocalStorage(AjaxUserName,'username');
const AjaxPassword = fromAjax(Field);
const LocalAjaxPassword = fromLocalStorage(AjaxPassword,'Password');

ReactDOM.render(
  <>
  <LocalAjaxUserName />
  <LocalAjaxPassword/>
  </>
,
  document.getElementById('root')
);
