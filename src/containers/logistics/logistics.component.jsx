import React from 'react';
import LogisticsNav from './components/LogisticsNav';
import LogisticsList from './subpage/LogisticsList';
import './logistics.scss';


class Logistics extends React.Component{
    render(){
        return(
            <div className='logistics-wrap'>
                <div className='logistics-advertising'>
                    温馨提示：加盟卡享有优惠价格
                    <div className='close'></div>
                </div>
                <LogisticsNav />

                <LogisticsList />
            </div>
        )
    }
}

export default Logistics;