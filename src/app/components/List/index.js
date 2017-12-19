import React,{ Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Item from './Item';

import './style.css';

class List extends Component {
	constructor(props, context) {
		super(props, context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
	}
	render() {
		const data = this.props.data;
		console.log(data)
		return (
			<div>
				<div className="list-container">
					{
						data.map((value,key) => {
							return (
								<Item key={key} data={value}/> 
							)
						})
					}
				</div>
			</div>
		)
	}
}

export default List;