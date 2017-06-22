import React from 'react';
import './components.scss';

class LogisticsNav extends React.Component{
    render() {
        return(
            <div>
                <ul className='LogisticsNav-list'>
                    <li>综合排序</li>
                    <li>价格</li>
                    <li>时效</li>
                    <li>评分</li>
                    <li>交易数</li>
                </ul>
            </div>
        )
    }
}

export default LogisticsNav;