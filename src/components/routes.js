import React, { Component} from 'react';
import { Router, Route, hashHistory} from 'react-router';
import Home from './Home';
import {SkiDayList} from './SkiDayList';
import {App} from './App';
import {Whoops404} from './Whoops404';
import {AddDayForm} from './AddDayForm';

const routes = (
	<Router history={hashHistory}>
			<Route path="/" component={Home} />
			<Route path='/addDay' component={AddDayForm} />
			<Route path="/skiDay" component={SkiDayList}>
				<Route path=":filter" component={SkiDayList} />
			</Route>	
			<Route path="*" component={Whoops404} />
	</Router>
)

export default routes;		