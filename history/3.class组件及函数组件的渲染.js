import React from './react'; //核心库
import ReactDOM from './react-dom';  // DOM渲染库
import PropTypes from 'prop-types'
import './index.css';

/* var element = React.createElement("h1", {
  className: "title",
  style: {
    color: 'red'
  }
}, "\u59DA\u54E5\u54E5",
 React.createElement("span", null, "\u54C8\u54C8\u54C8\u54C8"));

console.log(element); */

// 函数组件
function Welcome(){
  return  React.createElement("h1", {
    className: "title",
    style: {
      color: 'red'
    }
  }, "\u59DA\u54E5\u54E5",
   React.createElement("span", null, "\u54C8\u54C8\u54C8\u54C8"));
}

class Welcome2 extends React.Component {
  render(){
    return  React.createElement("h2", {
      className: "title",
      style: {
        color: 'red'
      }
    }, "哈哈哈哈哈",
     React.createElement("div", null, "姚哥哥")); 
  }
}

ReactDOM.render(
  <Welcome2/>
,
  document.getElementById('root')
);

