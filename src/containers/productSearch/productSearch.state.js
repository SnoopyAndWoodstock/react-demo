import {observable, action} from 'mobx';

class ProductState {
    @observable container= {
        checked1: false,//switch 按钮选项
        checked2: true,
        fromText: []//存储城市名称
    }

    @observable formList= [];

    //设置fromText对值
    @action setProductFromText(num,text) {
        this.container.fromText[num]= text;
    }

    //反转fromText
    @action fromTextReverse() {
        var arr = Array.from(this.container.fromText)
        this.container.fromText=arr.reverse();
        console.log(this.container.fromText.length)
    }



}

export default new ProductState();