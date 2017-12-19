import React from 'react';
import { render } from 'react-dom';
import RouteMap from './app/router/RouteMap';
import { browserHistory } from 'react-router';

import { Provider } from 'react-redux';
import configureStore from './app/store/configureStore';

import './app/static/css/common.css';
import './app/static/css/font.css';


const store = configureStore();

render( 
	<Provider store={store}>
		<RouteMap history={browserHistory}/>			
	</Provider>, 
	document.getElementById('root') 
)
