import React from 'react';
import { Toast } from 'antd-mobile';

import { observer } from 'mobx-react';
import yerenState from '../yeren.state';
import axios from 'axios';

@observer
class Code extends React.Component {
    constructor(props) {
        super(props);
        this.getCode = this.getCode.bind(this)

        this.state= {
            timeText: '点击获取验证码',
        }
    }

    //获取验证码
    getCode() {
        console.log(this.props)
        var regMobile = /^1[3|4|5|6|7|8|9][0-9]{1}[0-9]{8}$/;
        if(!regMobile.test(yerenState.state.telValue.replace(/\s+/g,""))){
            Toast.info('请输入正确的手机号码!!!', 1.5);
        }else {
            this.refs.btnCode.setAttribute('disabled','disabled');
            this.setTime();
        }
    }

    getJson() {
        axios.post('http://test-swk-pay.kxtx.cn/webapp/order/api/waybill/searchWaybill').then((data)=> {
            console.log(data)
        });
    }

    setTime() {
        var _this = this;
        var time = 10;
        var item = setInterval(()=>{
            time--;
            this.setState({
                timeText: '倒计时'+(time)
            });

            if(time <= 0) {
                time = 10;
                _this.setState({
                    timeText: '重新获取验证码'
                });
                clearInterval(item);
            }
        },1000)
    }

    render() {
        return (
            <div>
                <button ref="btnCode" className="code-btn" onClick={this.getCode}>{this.state.timeText}</button>
            </div>
        )
    }
}

export default Code;