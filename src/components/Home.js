/*
 * @Author: your name
 * @Date: 2020-08-17 20:20:08
 * @LastEditTime: 2020-08-18 08:10:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-my/src/components/Home.js
 */

import React from 'react';
export default class extends React.Component {
    state = {
        val:0
    }
    componentDidMount(){
        this.setState({val:this.state.val+1});
        console.log(this.state.val);
        this.setState({val:this.state.val+1});
        console.log(this.state.val);
        setTimeout(()=>{
            this.setState({val:this.state.val+1});
            console.log(this.state.val);
            this.setState({val:this.state.val+1});
            console.log(this.state.val);
            this.setState({val:this.state.val+1});
            console.log(this.state.val);
        },0)
    }
    render(){
        return (
            <div>
                {this.state.val}
                
            </div>
        )
    }
}