import React,{ Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './style.css';

class LoadMore extends Component {
	constructor(props, context) {
		super(props, context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
	}

	render() {
		return (
			<div className="load-more" ref="wrapper">
				{
					this.props.isLoadingMore
					? <span>加载中...</span>
					: <span onClick={this.LoadMoreHandle.bind(this)}>加载更多</span>
				}
			</div>
		)
	}

	LoadMoreHandle() {
		// 执行传递过来的 loadMoreData 函数
		this.props.LoadMoreFn();
	}

	componentDidMount() {
		let timeoutId;
		const LoadMoreFn = this.props.LoadMoreFn;
		const wrapper = this.refs.wrapper;
		function callback() {
			const top = wrapper.getBoundingClientRect().top;
			const windowHeight = window.screen.height;
			if( top && top < windowHeight ) {
				// 当 wrapper 已经被滚动到暴露在页面的可视范围之内的时候就触发
				LoadMoreFn();
			}
		}
		window.addEventListener('scroll',() => {
			if( this.props.isLoadingMore ) {
				return 
			}
			if(timeoutId) {
				clearTimeout(timeoutId);
			}
			timeoutId = setTimeout(() => {
				callback();
			},50)
		},false)
	}
}

export default LoadMore;