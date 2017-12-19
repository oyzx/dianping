import React,{ Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class NotFound extends Component {
	constructor(props, context) {
		super(props, context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
	}
	render() {
		return (
			<p>404 NotFound</p>
		)
	}
}

export default NotFound;