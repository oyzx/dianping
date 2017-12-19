import React,{ Component } from 'react';
// import { browserHistory } from 'react-router'; 
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class Detail extends Component {
	constructor(props, context) {
		super(props, context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
	}
	render() {
		return (
			<p>Detail</p>
		)
	}
}