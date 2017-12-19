import React,{ Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { browserHistory } from 'react-router'; 
import SearchInput from '../SearchInput';

import './style.css';

class SearchHandle extends Component {
	constructor(props, context) {
		super(props, context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
	}
	render() {
		const params = this.props.params;
		return (
			<div>
				<div id="search-header" className="clear-fix">
					<span className="back-icon float-left" onClick={this.clickHandle.bind(this)}>
						<i className="icon-chevron-left"></i>
					</span>
					<div className="input-container">
						<i className="icon-search"></i>
						<i className="icon-search"></i>
						&nbsp;
						<SearchInput 
							value = {params.category === 'all' ? params.keyword : params.category}
							enterHandle={this.enterHandle.bind(this)}
						/>
					</div>
				</div>
			</div>
		)
	}
	clickHandle() {
		window.history.back()
	}
	enterHandle(value) {
		// encodeURIComponent() 函数可把字符串作为 URI 组件进行编码。
		browserHistory.push('/search/all/' + encodeURIComponent(value))
	}
}

export default SearchHandle;