import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import LocalStore from '../util/localStore.js';
import {CITYNAME} from '../config/localStoreKey.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userInfoActionFormOtherFile from '../actions/userinfo.js';

import './style.css';

class App extends Component{
	constructor(props, context) {
		super(props, context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
		this.state = {
			initDone: true
		}
	}
	render() {	
		return (
			<div>
				{
					this.state.initDone
					? this.props.children
					: <div className='loading'>加载中...</div>
				}
			</div>
		)
	}
	componentDidMount() {   // 模拟 ajax 请求 
		// 从localStorerage里面获取城市
		let cityName = LocalStore.getItem(CITYNAME);
		if ( cityName === null ) {
			cityName = '北京'
		}
		
		// 将城市信息存储到 Redux 中
		this.props.userinfoActions.update({
			cityName: cityName
		})
	}
}

function mapStateToProps(state) {
	return {

	}
}

function mapDispatchToProps(dispatch) {
	return {
		userinfoActions: bindActionCreators(userInfoActionFormOtherFile,dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);