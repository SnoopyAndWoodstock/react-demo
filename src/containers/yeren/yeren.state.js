import {
	observable,
	action
} from 'mobx';

class yerenState {

	@observable state = {
		username: '', //用户名
		content: '' //评论内容
	};

	@action setName(val) {
		this.state.username = val;
	}

	@action setContent(txt) {
		this.state.content = txt;
	}

}



export default new yerenState();