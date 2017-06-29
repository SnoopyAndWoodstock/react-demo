import React from 'react';
import { observer } from 'mobx-react';
import commentState from './comment.state.js';
import { List,Modal, TextareaItem,InputItem,Button,WingBlank , WhiteSpace, Toast } from 'antd-mobile';
import './comment.scss'
@observer

/* input */
class CommentInput extends React.Component{
    constructor(props){
        super(props)
    }

    bindName(txt){
        commentState.setUserName(txt);
    }
    bindContent(txt){
        commentState.setContent(txt);
    }

    /* 验证 */
    postData(){
        if(commentState.state.username== "" || commentState.state.username==undefined){
            commentState.setTipMsg('请输入名称');
            commentState.setModalShow(true);
            return 
        }
        if(commentState.state.content =="" || commentState.state.content ==undefined){
            commentState.setTipMsg('请输入评论内容');
            commentState.setModalShow(true);
            return 
        }
        if(this.props.onSubmit){
            const {username,content }=commentState.state;
            this.props.onSubmit({username,content})
        }
        commentState.setContent();
    }

    closeAlert =key =>() =>{
        commentState.setModalShow(false)
    }

    render(){
        return(
           <div>
                <div className="inpit-box">
                    <WhiteSpace />
                    <InputItem clear placeholder="请输入名称"  onChange={this.bindName.bind(this)} >姓名</InputItem>
                    <TextareaItem title="内容" placeholder="请输入评论内容" autoHeight onChange={this.bindContent.bind(this)}>
                    </TextareaItem>
                </div>
                <WhiteSpace size="lg" />
                <WingBlank >
                    <Button className="btn" type="primary" onClick={this.postData.bind(this)}>提交评论</Button>
                </WingBlank>
                <WhiteSpace size="lg" />
                <Modal title="提示信息" transparent visible={commentState.state.modalShow} onClose={this.closeAlert('modalShow')}
                footer={[{text:'确定',onPress: ()=> {this.closeAlert('modalShow')();}}]}>
                    {commentState.state.tipMsg}
                </Modal>
           </div> 
        )
    }
}

/* List */
class CommentList extends React.Component{
    static defaultProps ={
        coments:[]
    }
    constructor(props){
        super(props)
    }
    render() {
        let commentData =this.props.comments;
        return (
            <div>
                {
                    commentData.length >0 ? <Comment commentData={commentData} />  :
                    <div className="nodata">
                        暂无数据
                    </div>
                }
            </div>
        );
    }
}

class Comment extends React.Component{
    constructor(props){
        super(props) 
    }
    render() {
        let commentInfo=this.props.commentData;
        return (
            <div>
                {
                   this.props.commentData.map(function(item,index){
                        return(
                            <div className="comment-list">
                                <WingBlank>   
                                <div className="comment-item">
                                    <label>{item.username}：</label>
                                    <p>{item.content}</p>
                                    <span className="item-time">1分钟前</span>
                                    <span className="item-delete">删除</span>
                                </div>
                                </WingBlank>
                                <WhiteSpace size="lg" />
                            </div>
                        )
                    }) 
                }
            </div>
        );
    }
}

/* app */
class CommentApp extends React.Component{
    constructor(){
        super()
        this.state={
            comments:[]
        }
    }
    handleSubmit(comment){
        this.state.comments.push(comment);
        this.setState({
            comments:this.state.comments
        })
    }
    render(){
        return(
            <div className="comment">
                <CommentInput  onSubmit={this.handleSubmit.bind(this)} />
                <CommentList comments={this.state.comments} />
            </div>
        )
    }
}

export default CommentApp;