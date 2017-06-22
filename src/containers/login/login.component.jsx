import React from 'react';
import Code from './subpage/Code';


import { observer } from 'mobx-react';
import homeState from './login.state.js';

import { List, InputItem,Button, WhiteSpace, Toast } from 'antd-mobile';



import './login.scss'
@observer


class Home extends React.Component{
    constructor() {
        super();

        this.state = {
        }
    }
    
    getPhone(text) {
        console.log(text)
        homeState.setPhone(text);
    }



    render() {
        return (
            <div className="login">
                <div>
                    <div>
                        <InputItem
                            type="phone"
                            ref="phoneName"
                            value={homeState.state.telValue}
                            onChange={this.getPhone.bind(this)}
                            placeholder="请输入手机号"
                        >
                             <img src={require("./img/phone.png")} alt=""/>
                             <div className="get-code">
                                <Code aaa='111'></Code>
                             </div>
                        </InputItem>
                        <InputItem
                            placeholder="验证码"
                        >
                         <img src={require("./img/phone.png")} alt=""/>
                        </InputItem>
                    </div>
                    <div className="cal-code">
                        语音获取验证码
                    </div>
                    <Button className="btn" type="primary">primary button</Button>
                </div>
            </div>
        )
    }
}

export default Home;