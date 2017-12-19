import React,{ Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import data from '../../../data/data.json';
import ListConponent from '../../../components/List';
import LoadMore from '../../../components/LoadMore';
import './style.css';

const initalState = {
	data: [],   //存储列表信息
	hasMore: false,   //记录当前状态下，还有没有更多的数据可供加载
	isLoadingMore: false, //记录当前状态下，是“加载中...”还是“点击加载更多”
	page: 1,   //下一页的页码
}

class SearchList extends Component {
	constructor(props, context) {
		super(props, context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
		this.state = initalState;
	}
	render() {
		return (
			<div>
				{
					this.state.data.length
					? <ListConponent data={this.state.data}/>
					: <div>加载中...</div>
				}
				{
					this.state.hasMore
					? <LoadMore isLoadingMore={this.state.isLoadingMore} LoadMoreFn={this.loadMoreData.bind(this)} />
					: <div></div>
				}
			</div>
		)
	}
	componentDidMount() {
		// 获取首页数据
		console.log(123);
		this.loadFirstPageData();
	}
	componentDidUpdate(prevProps,prevState) {
		console.log(456);

		const keyword = this.props.keyword;
		const category = this.props.category;
		if(keyword === prevProps.keyword && category === prevProps.category) {
			return
		}	

		this.setState(initalState);
		this.loadFirstPageData();
	}

	// 获取首屏数据
	loadFirstPageData() {
		// const cityName = this.props.cityName;
		// console.log("当前城市："+cityName)
		this.resultHandle(data.Like);
	}

	// 加载更多数据
	loadMoreData() {
		// 记录状态
		this.setState({
			isLoadingMore: true
		})
		// const cityName = this.props.cityName;
		// console.log(cityName)
		const page = this.state.page;  // 获取下一页页码
		// console.log("当前页数："+page);
		if( this.state.page === 7 ) {
			this.setState({
				isLoadingMore: false
			})
			return
		}
		this.resultHandle(data.Like);
		this.setState({
			page: page + 1,
			isLoadingMore: false
		})
	}

	// 数据处理
	resultHandle(result) {
		//存储
		const data = result.data
		
		this.setState({
			data: this.state.data.concat(data),
			hasMore: result.hasMore
		})
	}
}

export default SearchList;