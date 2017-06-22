import React from 'react';
import { observer } from 'mobx-react';
import productDetailState from './productDetail.state.js';
import { List, InputItem, Button, WhiteSpace, Toast } from 'antd-mobile';
import CommentInfo from './component/Comment';
import CompanyInfo from './component/CompanyInfo';
import SummaryInfo from './component/SummaryInfo';
import PriceDesc from './component/PriceDesc';
import DescTable from './component/DescTable';
import './productDetail.scss';

@observer
class productDetail extends React.Component {
	constructor() {
		super();
		this.state = {
			companyInfo: {
				companyName: "上海市极速物流有限公司",
				openStartTime: "06:00",
				endTime: "18:00",
				tel: "021-33890080",
				mobile: "13773014328"

			},
			priceDesc: {
				"freight": 200,
				"takingFee": 200,
				"packgingFee": 200,
				"totalFee": 600

			},
			summaryInfo: {
				from: {
					province: "上海",
					area: "普陀区"

				},
				to: {
					province: "北京",
					area: "朝阳区"
				},
				time: "90",
				orderTimes: "2"
			}
		}
	}

	getPhone(text) {

	}
	render() {

		return(
			<div className="productDetail">
            <SummaryInfo summaryInfo={this.state.summaryInfo}></SummaryInfo>
            <CompanyInfo companyInfo={this.state.companyInfo}></CompanyInfo>
            <div className="blank-space"></div>
            <PriceDesc priceDesc={this.state.priceDesc}></PriceDesc>  
             <div className="blank-space"></div>
             <CommentInfo></CommentInfo>
               <div className="blank-space"></div>
             <DescTable></DescTable>
              <div className="blank-space"></div>
              <button className='xiadan'>立即下单</button>
            </div>
		)
	}
}
export default productDetail;