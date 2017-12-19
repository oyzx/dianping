import React,{ Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
// import { browserHistory } from 'react-router'; 
import SearchHandle from '../../components/SearchHandle';
import SearchList from './subpage';


export default class Search extends Component {
	constructor(props, context) {
		super(props, context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
	}
	render() {	
		const params = this.props.params;
		return (
			<div>
				<SearchHandle params={this.props.params}/>
				<SearchList keyword={params.keyword} category={params.category}/>
			</div>
		)
	}
	componentDidMount() {
		// params 获取路由参数
		console.log(this.props.params)
	}
}