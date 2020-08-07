/*
 * @Author: your name
 * @Date: 2020-07-31 07:29:20
 * @LastEditTime: 2020-08-07 08:00:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-my/src/index.js
 */

import React from 'react'; //核心库
import ReactDOM from 'react-dom';  // DOM渲染库
import './index.css';


class ScrollList extends React.Component {
  constructor(props){
    super(props);
    this.container = React.createRef();
    this.state = {
      messages:[]
    }
  }

  componentDidMount(){
    this.timer = setInterval(()=>{
      this.setState({
        messages: [`${this.state.messages.length}`,...this.state.messages]
      })
    },1000)
  }

  /* 
    在组件重新更新前获取DOM的快照 这里拿的DOM更新前的DOM
    简单通俗易懂的说  就是可以拿到老DOM的信息
  */
  getSnapshotBeforeUpdate(){

    return this.container.current.scrollHeight; //获取内容的高度
  }

  /**
   * @param {type} prevProps 
   * @param {type} prevState  
   * @param {type} prevScrollHeight getSnapshotBeforeUpdate 里面return 的 
   */
  /* 更新完成后 DOM已经改变 */
  componentDidUpdate(prevProps, prevState, prevScrollHeight){
      let nextScrollpTop = this.container.current.scrollTop; //向上滚动的高度
      this.container.current.scrollTop = nextScrollpTop + (this.container.current.scrollHeight - prevScrollHeight)
  }
  render(){
    let styleObj = {
      width: '100px',
      height : '100px',
      border : '1px solid red',
      overflow : 'auto'
    }
    return (
      <div style = {styleObj} ref = { this.container }>
          {
            this.state.messages.map((item, index)=>
             ( <div key={index}>{item}</div>)
            )
          }
      </div>
    )
  }
}

ReactDOM.render(
  <ScrollList />
,
  document.getElementById('root')
);
