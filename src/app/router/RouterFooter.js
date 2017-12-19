import React,{ Component } from 'react';
import { Router,Route,IndexRoute } from 'react-router';

import App from '../containers/App';
import Home from '../containers/Home';
import Commodity from '../containers/Commodity';
import Cart from '../containers/Cart';
import Personal from '../containers/Personal'
import NotFound from '../containers/NotFound';
import { browserHistory } from 'react-router';

let routes = <Route path='/' component={App}>
		<IndexRoute component={Home} />
		<Route path='commodity' component={Commodity} />
		<Route path='cart' component={Cart} />
		<Route path='personal' component={Personal} />
		<Route path='*' component={NotFound} />
	</Route>;

export default class RouteMap extends Component {
	updateHandle() {
		// console.log('每次router变化之后都会触发')
	}
	render() {
		return (
			<Router history={browserHistory} onUpdate={this.updateHandle}>
				{routes}
			</Router>
		)
	}
}