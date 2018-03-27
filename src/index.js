import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {SkiDayList} from './components/SkiDayList';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
		<SkiDayList days={
			[
				{
					resort:'Goa',
					date : new Date(),
					powder : true,
					backcountry : false

				},
				{
					resort:'Daman',
					date : new Date(),
					powder : false,
					backcountry : true

				},
				{
					resort:'Diu',
					date : new Date(),
					powder : true,
					backcountry : false

				}
			]
		}/>, 
		document.getElementById('root')
);
registerServiceWorker();
