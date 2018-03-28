import React, { Component} from 'react';
import { Router, Route, hashHistory} from 'react-router';
import Home from './Home';
import {Whoops404} from './Whoops404';

const routes = (
	<Router history={hashHistory}>
			<Route path="/" component={Home} />			
			<Route path="*" component={Whoops404} />
	</Router>
)

export default routes;		