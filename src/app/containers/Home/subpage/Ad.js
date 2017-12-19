import React,{ Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import HomeAd from '../../../components/HomeAd';
import data from '../../../data/data.json';

class Ad extends Component {
	constructor(props, context) {
		super(props, context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
		this.state = {
			data: []
		}
	}
	render() {
		return (
			<div>
				{
					this.state.data.length
					? <HomeAd data={this.state.data} />
					: <div>加载中...</div>
				}
			</div>
		)
	}
	componentDidMount() {
		this.setState({
			data: data.Discount
		})		
	}
}

export default Ad;