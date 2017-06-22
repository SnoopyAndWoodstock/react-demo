import React from 'react';
import { observer } from 'mobx-react';
import { List, InputItem,Button, WhiteSpace, Toast } from 'antd-mobile';

@observer
class comment extends React.Component{
    constructor(props) {
        super(props);
      
    }
    
    getPhone(text) {
    
    }
    render() {
        return (
            <div className="comment-info">
                <div className='comment-title'>
                  线路评价<label>(588)</label>
                 <icon className='icon-arrow'></icon>
                </div>
                <div className='comment-rate'>
                 <div className='num'>4.0</div>
                 <div class=''>
                  <label>综合评分:</label>
                    <div></div>
                    <div><label>好评率:</label>98%</div>
                 </div>
                </div>
                <hr className='split'></hr>
                <div className='comment-content'>
                  <div className='comments'>
                    <div className='comment'>
                     <div className='user-info'>
                     <image className='avatar'/><label className='nickname'>zhutj</label>
                     </div>
                     <div className=''></div>
                    </div>
                  </div>
                </div>
                <button className='view-all'>查看全部</button>
            </div>
        )
    }
}
export default comment;