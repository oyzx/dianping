import React,{ Component } from 'react';
import { Link } from 'react-router'; 

export default class Footer extends Component {
	render() {
		return (
			<div className="footer">
				<div className="column">
					<Link to="/">首页</Link>
				</div>
				<div className="column">
					<Link to="/commodity">商品</Link>
				</div>
				<div className="column">
					<Link to="/cart">购物车</Link>
				</div>
				<div className="column">
					<Link to="/personal">个人</Link>	
				</div>
			</div>
		)
	}
}