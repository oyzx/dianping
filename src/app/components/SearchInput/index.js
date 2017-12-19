import React,{ Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './style.css';

class SearchInput extends Component {
	constructor(props, context) {
		super(props, context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
		this.state = {
			value: ''
		}
	}
	render() {
		return (
			<input 
				type="text" 
				className="search-input"
				placeholder="请输入关键字"
				onChange={this.changeHandle.bind(this)}
				onKeyUp={this.keyupHandle.bind(this)}
				value={this.state.value}
			/>
		)
	}
	componentDidMount() {
		this.setState({
			value: this.props.value || ''
		})
	}
	changeHandle(e) {
		const valueInput = e.target.value;
		this.setState({
			value: valueInput
		})
	}
	keyupHandle(e) {
		if (e.keyCode !== 13) {
			return
		}
		this.props.enterHandle(this.state.value);
	}
}

export default SearchInput;