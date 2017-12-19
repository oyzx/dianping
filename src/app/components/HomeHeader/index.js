import React,{ Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { browserHistory } from 'react-router'; 
import {Link} from 'react-router';

import SearchInput from '../SearchInput';

import './style.css';

export default class HomeHeader extends Component {
	constructor(props, context) {
		super(props, context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
	}
	render() {
		return (
			<div id="home-header" className="clear-fix">
				<div className="home-header-left float-left">
					<Link to="/city"><span className={this.props.cityId}>{this.props.cityName}</span></Link>
					&nbsp;
					<i className="icon-angle-down"></i>
				</div>
				<div className="home-header-right float-right">
					<i className="icon-user"></i>
				</div>
				<div className="home-header-middle">
					<div className="search-container">
						<i className="icon-search"></i>
						&nbsp;
						<SearchInput value="" enterHandle={this.enterHandle.bind(this)}/>
					</div>
				</div>
			</div>
		)
	}
	enterHandle(value) {
		// encodeURIComponent() 函数可把字符串作为 URI 组件进行编码。
		browserHistory.push('/search/all/' + encodeURIComponent(value))
	}
}