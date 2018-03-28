import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {SkiDayList} from './components/SkiDayList';
import {App} from './components/App';
import {Whoops404} from './components/Whoops404';
import {AddDayForm} from './components/AddDayForm';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, hashHistory} from 'react-router';
import routes from './components/routes';
import Member from './components/Member';
import MemberList from './components/MemberList';


ReactDOM.render(<MemberList/> ,document.getElementById('root'));

// ReactDOM.render(<Member
// 					admin={true}  //false
// 					name='Divyesh Rupawala'
// 					email='divyesh.rupawala@sapient.com'
// 					thumbnail='https://avatars3.githubusercontent.com/u/4113351?s=460&v=4'
// 					makeAdmin={(email) => console.log(email)}/> ,document.getElementById('root'));

//Route with saparate file
//ReactDOM.render(routes,document.getElementById('root'));

// Route Example
// ReactDOM.render(
// 		<Router history={hashHistory}>
// 			<Route path="/" component={App} />
// 			<Route path="/addDay" component={AddDayForm} />
// 			<Route path="/skiDay" component={SkiDayList}>
// 				<Route path=":filter" component={SkiDayList} />
// 			</Route>
// 			<Route path="*" component={Whoops404} />
// 		</Router>, 
// 		document.getElementById('root')
// );

// Before router
// ReactDOM.render(
// 		<SkiDayList days={
// 			[
// 				{
// 					resort:'Goa',
// 					date : new Date(),
// 					powder : true,
// 					backcountry : false

// 				},
// 				{
// 					resort:'Daman',
// 					date : new Date(),
// 					powder : false,
// 					backcountry : true

// 				},
// 				{
// 					resort:'Diu',
// 					date : new Date(),
// 					powder : true,
// 					backcountry : false

// 				}
// 			]
// 		}/>, 
// 		document.getElementById('root')
// );
registerServiceWorker();
