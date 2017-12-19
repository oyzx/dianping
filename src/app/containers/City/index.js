import React from 'react'; 
import { browserHistory } from 'react-router'; 
import PureRenderMixin from 'react-addons-pure-render-mixin';
import * as userInfoActionFormOtherFile from '../../actions/userinfo.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../../components/Header';
import CurrentCity from '../../components/CurrentCity';
import CityList from '../../components/CityList';
import LocalStore from '../../util/localStore.js';
import { CITYNAME } from '../../config/localStoreKey.js';

class City extends React.Component { 
	constructor(props, context) {
		super(props, context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
	}
	render() { 
		return ( 
			<div>
				<Header title="选择城市" />
				<CurrentCity cityName={this.props.userinfo.cityName}/>
				<CityList changeFn={this.changeCity.bind(this)}/>
			</div>
		) 
	} 
	changeCity(newCity) {
		if (newCity === null) {
			return
		}
		
		// 修改redux
		const userinfo = this.props.userinfo;
		userinfo.cityName = newCity;
		this.props.userinfoActions.update(userinfo);	
		// 修改localStorage
		LocalStore.setItem(CITYNAME,newCity);
		// 返回首页
		browserHistory.push('/');
	}
} 

function mapStateToProps(state) {
	return {
		userinfo:state.userinfo
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
)(City)
