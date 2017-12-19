import React,{ Component } from 'react';
import { Router,Route,IndexRoute } from 'react-router';

import Index from '../containers';
import Home from '../containers/Home';
import City from '../containers/City';
import User from '../containers/User';
import Search from '../containers/Search';
import Detail from '../containers/Detail';
import NotFound from '../containers/NotFound';



export default class RouteMap extends Component {
	render() {
		return (
			<Router history={this.props.history}>
				<Route path='/' component={Index}>
					<IndexRoute component={Home} />
					<Route path='/city' component={City} />
					<Route path='/User' component={User} />
					<Route path='/search/:category(/:keyword)' component={Search} />
					<Route path='/detail/:id' component={Detail} />
					<Route path='*' component={NotFound} />
				</Route>
			</Router>
		)
	}
}