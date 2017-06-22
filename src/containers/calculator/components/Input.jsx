import React from 'react';
import Star from '../../../components/star/Star';

import './components.scss';

class ItemList extends React.Component {
    render(){
        const item = this.props.item;
        const starBox = (
            <div className='item-star'>
                <i className={item.tj+'active'}></i>
                <Star score={item.star} />
                <span>{item.star}分</span>
            </div>
        )

        return(
            <div className='item-list'>
                <h3 className='item-list-title'>{item.title}</h3>
                <div className='item-active'>
                    {item.tj==''? <div>暂无评价</div>: starBox}
                </div>
                <div className='item-active'>交易次数：<span>{item.jiaoyi}票</span></div>
                <div className='item-active'>运输时效：<span>{item.time}小时</span></div>
                <div className='item-monery'>
                    <span>{item.monery}</span><i>.00</i>
                </div>
            </div>
        )
    }
}

export default ItemList