import React from 'react';
import { observer } from 'mobx-react';
import { List, InputItem,Button, WhiteSpace, Toast } from 'antd-mobile';

@observer
class summaryInfo extends React.Component{
    constructor(props) {
        super(props);
       
    }
    getPhone(text) {
      
    }
    render() {
        return (
            <div className="summary-info">
                <div className="card">
                <div className="from-wehere">
                 <label className='province'>{this.props.summaryInfo.from.province}</label>
                   <label className='city'>{this.props.summaryInfo.from.area}</label>
                </div>
                <div className='direction'>
                  <label>{this.props.summaryInfo.time}小时</label>
                    <label>交易次数:{this.props.summaryInfo.orderTimes}票</label>
                </div>
                <div className='destination'>
                  <label className='province'>{this.props.summaryInfo.to.province}</label>
                    <label className='city'>{this.props.summaryInfo.to.area}</label>
                </div>
                 
                  
                </div>
            </div>
        )
    }
}
export default summaryInfo;