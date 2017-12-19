import React,{ Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './style.css';

class CurrentCity extends Component {
	constructor(props, context) {
		super(props, context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
	}
	render() {
		return (
			<div className="current-city">
				<h2>{this.props.cityName}</h2>
			</div>
		)
	}
}

export default CurrentCity;