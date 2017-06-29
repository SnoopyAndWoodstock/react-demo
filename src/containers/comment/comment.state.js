import {
	observable,
	action
} from 'mobx';

class commentState {

	@observable state = {
		username: '', //用户名
		content: '', //评论内容
		tipMsg: '', //提示信息
		modalShow: false, //是否显示弹窗
		isData: false //是否有数据
	};

	@action setUserName(val) {
		this.state.username = val;
	}

	@action setContent(txt) {
		this.state.content = txt;
	}

	@action setTipMsg(txt) {
		this.state.tipMsg = txt;
	}

	@action setModalShow(b) {
		this.state.modalShow = b;
	}

	@action setIsData(b) {
		this.state.isData = b;
	}

}



export default new commentState();