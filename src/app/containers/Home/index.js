import React,{ Component } from 'react'; 
import PureRenderMixin from 'react-addons-pure-render-mixin';
import HomeHeader from '../../components/HomeHeader';
import { connect } from 'react-redux';
import Category from '../../components/Category';
import Ad from './subpage/Ad.js';
import List from './subpage/List.js';

class Home extends Component { 
	constructor(props, context) {
		super(props, context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
	}
	render() { 
		return ( 
			<div> 
			 	<div>
			 		<HomeHeader cityName={this.props.userinfo.cityName} />
			 		<Category />
			 		<div style={{height: '15px'}}></div>
			 		<Ad />
			 		<List cityName={this.props.userinfo.cityName}/>
			 	</div>
			</div> 
		) 
	} 
} 

function mapStateToProps(state) {
	return {
		userinfo:state.userinfo
	}
}

function mapDispatchToProps(dispatch) {
	return {
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home)
