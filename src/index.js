/*
 * @Author: your name
 * @Date: 2020-07-31 07:29:20
 * @LastEditTime: 2020-08-07 09:06:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-my/src/index.js
 */

import React from 'react'; //核心库
import ReactDOM from 'react-dom';
import './index.css';  // DOM渲染库

// ThemeContext = {Provider,Consumer}
// ThemeContext是一个对象 里面有两个属性 一个提供者 一个消费者
let ThemeContext = React.createContext();

class Main extends React.Component {
    render(){
      return (
        <div  style = {{margin: '10px',border: `1px solid ${this.props.color}`,padding: '5px'}}>
          Main 
          <Content changeColor={this.props.changeColor} color = {this.props.color} /> 
        </div> 
      )
    }
}

class Content  extends React.Component {
  render(){
    return (
      <div  style = {{margin: '10px',border: `1px solid ${this.props.color}`,padding: '5px'}}>
        Content
        <br/>
        <button onClick={()=>this.props.changeColor('red')}>红啊</button>
        <br/>
        <button onClick={()=>this.props.changeColor('green')}>绿啊</button>
      </div>
    )
  }
}

class Header extends React.Component {
  static contextType = ThemeContext;
  
  render(){
    console.log(Header.contextType,'contextType');
    return (
      <div  style = {{margin: '10px',border: `1px solid ${this.props.color}`,padding: '5px'}}>
        Header 
        <Title changeColor={this.props.changeColor} color = {this.props.color} /> 
      </div>
    )
  }
}

class Title extends React.Component {
  render(){
    return (
      <div  style = {{margin: '10px',border: `1px solid ${this.props.color}`,padding: '5px', }}>Title</div>
    )
  }
}

class Page extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      color: 'red'
    }
  }
  changeColor = (color) => {
    this.setState({color})
  }
  render(){
    let value = {
      color: this.state.color,
      changeColor: this.changeColor
    }
    return (
      <ThemeContext.Provider value={value}>
        <div style = {{margin: '10px',border: `1px solid ${this.state.color}`,padding: '5px', width: '200px'}}>
          Page
          <Header changeColor={this.changeColor} color = {this.state.color} />
          <Main changeColor={this.changeColor} color = {this.state.color} />
        </div>
      </ThemeContext.Provider>
     
    )
  }
}


ReactDOM.render(
  <Page />
,
  document.getElementById('root')
);
