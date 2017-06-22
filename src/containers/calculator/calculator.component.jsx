import React from 'react'
import { observer } from 'mobx-react';
import './calculator.scss'
@observer

class Input extends React.Component{
	render(){
		return(
			<div>
				<input type="number"/>
			</div>
		)
	}

}

class PercentageShower extends React.Component{
	render() {
		return (
			<div>
				
			</div>
		);
	}
}


class PercentageApp extends React.Component{
	render(){
		return (
			<div>
				<Input />
				<PercentageShower />
			</div>
		)
	}
}


class Post extends React.Component{
	constructor(props){
		super(props)
		this.state={
			'content':''
		}
	}
	showPHeight(){
		console.log(this.text.offsetHeight);
	}
	render() {
		return (
			<div>
				<p ref={(text) => this.text=text} onClick={this.showPHeight.bind(this)}>{this.props.content}</p>
			</div>
		);
	}
}

class AutoFocus extends React.Component{
	constructor(){
		super()
		this.state ={
			'content':''
		}
	}
	componentDidMount(){
		this.input.focus()
		console.log(this.input.value)
	}
	setContent(){
		console.log( this.input.value);
		this.setState({
			content:this.input.value
		})
	}
	render(){
		return(
			<div>
				<Post content={this.state.content} />
				<input type="text"  ref={(input) => this.input=input}  />
				<input type="button" value="设置p的值" onClick={this.setContent.bind(this) } />
			</div>
		)
	}	
}

export default AutoFocus