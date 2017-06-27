import React from 'react';
import { observer } from 'mobx-react';
import commentState from './comment.state.js';
import { List,Modal, TextareaItem,InputItem,Button,WingBlank , WhiteSpace, Toast } from 'antd-mobile';
import './comment.scss'
@observer
/* input */
class CommentInput extends React.Component{
    render(){
        return(
           <div>
                <div className="inpit-box">
                    <WhiteSpace />
                    <InputItem clear placeholder="请输入名称">姓名</InputItem>
                    <TextareaItem title="内容" placeholder="请输入评论内容" autoHeight >
                    </TextareaItem>
                </div>
                <WhiteSpace size="lg" />
                <WingBlank >
                    <Button className="btn" type="primary">提交评论</Button>
                </WingBlank>
                <WhiteSpace size="lg" />
           </div> 
        )
    }
}

/* List */
class CommentList extends React.Component{
    render() {
        return (
            <div>
                <Comment />
            </div>
        );
    }
}

class Comment extends React.Component{
    render() {
        return (
            <div className="comment-list">
                <WingBlank>   
                <div className="comment-item">
                    <label>AA：</label>
                    <p>嘻嘻哈哈哈输入的内容</p>
                    <span className="item-time">1分钟前</span>
                    <span className="item-delete">删除</span>
                </div>
                </WingBlank>
            </div>
        );
    }
}

/* app */
class CommentApp extends React.Component{
    render(){
        return(
            <div className="comment">
                <CommentInput />
                <CommentList />
            </div>
        )
    }
}

export default CommentApp;