import React from 'react';
import { observer } from 'mobx-react';
import demoState from './demo.state.js';
import { List,Modal, TextareaItem,InputItem,Button,WingBlank , WhiteSpace, Toast } from 'antd-mobile';
import './demo.scss'

@observer
    /* input */
class Clock extends React.Component {
    constructor() {
        super()
        this.state ={
            date:new Date(),
            isShowClock:false
        }
    }

    componentWillMount(){
        this.time=setInterval(() =>{
            this.setState({date:new Date()})
        },1000)
    }

    hideTime(){
        console.log(33);
        console.log(isShowClock)
        this.setState({
            isShowClock:!isShowClock
        })
    }

    render() {
        return (
            <div className="demo">
                { this.isShowClock ? 
                <div className="txtInfo">
                    <h2>当前时间</h2>
                    <p>{this.state.date.toLocaleTimeString() }</p>
                </div>
                : '哇哈哈哈哈'
                }
                <input type="button" onClick="this.hiadeClock.bind(this)" value="点击显示" />
            </div>
        )
    }
}


class  Index extends React.Component{
    constructor(){
        super()
        this.state ={
            isShowClock:false
        }
    }

    hiadeClock(){
        this.setState({
            isShowClock:!isShowClock
        })
    }

    render(){
        return(
            <div>
                {this.state.isShowClock ? <Clock /> : null }
                <button onClick="this.hiadeClock.bind(this)">点击隐藏 显示</button>
            </div>
        )
    }
}

export default Clock;