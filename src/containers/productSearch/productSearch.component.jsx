import React from 'react';

import {observer} from 'mobx-react';
import productState from './productSearch.state';

import ProductSwitch from './components/ProductSwitch';
import FromTo from './components/FromTo';

import {Button, InputItem} from 'antd-mobile';

import './productSearch.scss';
@observer
class ProductSearch extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            url1: './img/from.png'
        }
    }

    render() {
        return (
            <div className='product-wrap'>
                <div className='product-content'>
                    <div className='switch-box'>
                        <div className='switch-box-active'>
                            <ProductSwitch id='checked1' checked={productState.container.checked1}></ProductSwitch>
                            <span>上门取货</span>
                        </div>
                        <div className='switch-box-active'>
                            <ProductSwitch id='checked2'  checked={productState.container.checked2}></ProductSwitch>
                            <span>送货上门</span>
                        </div>
                    </div>

                    <div className='from-to'>
                        <div className='from'>
                            <FromTo isUrl="1" placeholderText='从哪里寄' text={productState.container.fromText[0]} />
                        </div>
                        <div
                            className='switch-address'
                            style={{
                            height: '1px'
                        }}>
                            <div className='address' onClick={this.handleFormText.bind(this)}></div>
                        </div>
                        <div className='to'>
                            <FromTo placeholderText='寄往哪里' text={productState.container.fromText[1]} />
                        </div>
                    </div>

                    <div className='quality'>
                        <div className='quality-active'>
                            <span>重量</span>
                            <input type='number' />
                            <span>kg</span>
                        </div>
                        <div className='quality-active'>
                            <span>体积</span>
                            <input type='number' />
                            <span>m³</span>
                        </div>
                    </div>
                </div>

                <div className='btn-box'>
                    <Button className="btn" disabled onClick={e => console.log(e)}>查询</Button>
                </div>
            </div>
        )
    }

    handleFormText() {
        //console.log(productState.container.fromText)
        productState.fromTextReverse();
    }
}

export default ProductSearch;