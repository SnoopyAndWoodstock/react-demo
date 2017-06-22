import React from 'react';
import { observer } from 'mobx-react';
import yerenState from './yeren.state.js';
import { List,Modal, TextareaItem,InputItem,Button,WingBlank , WhiteSpace, Toast } from 'antd-mobile';
import './yeren.scss'
@observer
/* input */
class CommentInput extends React.Component{
    constructor() {
        super();
        this.state = {
            timMesage:'',
            modalAlert:false
        }
    }
    hanleUserNaemChange(text){
        yerenState.setName(text);
    }
    handleContentChange(txt){
        yerenState.setContent(txt);
    }
    handleSubmitData(){
        if(yerenState.state.username=="" || yerenState.state.username.length <=0){
            this.setState({
                modalAlert:true,
                timMesage:'请输入用户名称'
            })
        }
        else if(yerenState.state.content =="" || yerenState.state.content.length <=0){
             this.setState({
                modalAlert:true,
                timMesage:'请输入评论内容'
            })
        }else{
            console.log(yerenState.state.username);
            if(this.props.onSubmit){
                const {username,content} =this.state
                this.props.onSubmit({username,content})
            }
            yerenState.setContent('');
        }
    }
    showModal =key =>(e) =>{
        e.preventDefault();
        this.setState({ [key]:true})
    }

    onClose =key =>()  =>{
        this.setState({[key]:false })
    }

    render(){
        return(
           <div className="inpit-box">
           <List >
                <InputItem clear placeholder="请填写姓名" value={yerenState.state.username} clear="true"   onChange={this.hanleUserNaemChange.bind(this)} >姓名</InputItem>
                <TextareaItem title="内容"  value={yerenState.state.content} onChange={this.handleContentChange.bind(this)} placeholder="请输入内容" autoHeight />
            </List>
            <WhiteSpace size="lg" />
             <WingBlank size="lg">
                    <Button className="btn" onClick={this.handleSubmitData.bind(this)}  type="primary">提交</Button>
                </WingBlank>
                <Modal title="提示信息" transparent  maskClosable={false}  visible={this.state.modalAlert} onClose={this.onClose('modalAlert')}
                footer={[{ text: '确定', onPress: () => {this.onClose('modalAlert')(); } }]} >
                {this.state.timMesage}
                </Modal>
           </div> 
        )
    }
}

/* List */
class CommentList extends React.Component{
    render() {
        return (
            <div>
                列表区域
                <Comment />
            </div>
        );
    }
}

class Comment extends React.Component{
    render() {
        return (
            <div>       
               <div className="content-item">
                    <div>
                        <label htmlFor=""></label>
                    </div>
               </div>
            </div>
        );
    }
}

/* app */
class CommentApp extends React.Component{
    render(){
        return(
            <div >
                <CommentInput />
                <CommentList />
            </div>
        )
    }
}

export default CommentApp;