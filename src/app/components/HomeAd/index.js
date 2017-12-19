import React,{ Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './style.css';

class HomeAd extends Component {
	constructor(props, context) {
		super(props, context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
	}
	render() {
		const data = this.props.data;
		return (
			<div id="home-ad">
				<h2>超级特惠</h2>
				<div className="ad-container clear-fix">
					{
						data.map((value,key) => {
							return <div key={key} className="ad-item float-left">
									<a href={value.link} target="_blank">
										<img src={value.img} alt={value.title} title={value.title}/>
									</a>
								</div>
						})
					}
				</div>
			</div>
		)
	}
}

export default HomeAd;