import React, { Component} from 'react';
import {SkiDayList} from './SkiDayList';
import {Menu} from './Menu';

export class App extends Component {
	render() {
		return (
			<div className="App">			
				{(this.props.location.pathname === "/") ?
					<div>
						<Menu />
						<h1> Home Page </h1>
					</div>	
					 :
					(this.props.location.pathname === "/addDay") ?
					<SkiDayList filter={this.props.params.filter} /> :
					<SkiDayList filter={this.props.params.filter} />
				}
				
			</div>
		)
	}
}
