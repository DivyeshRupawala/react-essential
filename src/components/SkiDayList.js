import React, { Component}  from 'react';
import PropTypes from 'react';
import Terrain from 'react-icons/lib/md/terrain';
import SnowFlak from 'react-icons/lib/ti/weather-snow';
import Calendar from 'react-icons/lib/fa/calendar';
import {SkiDayRow} from './SkiDayRow';
import { Link } from 'react-router';
import {AddDayForm} from './AddDayForm';

export class SkiDayList extends Component {	

	constructor(props) {
		super(props);
		this.addNewDay = this.addNewDay.bind(this);
		this.state = {
			days :[{
			resort:'Daman',
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

		}]
		}
	}

	// const filterdays = (!filter || filter !== 'powder' || filter !== 'backcountry') ? 
	// 					days : days.filter(day => day[filter]);

	addNewDay(newDay) {
		this.setState({
			days : [
				...this.state.days,
				newDay
			]
		});
	}

	render() {
		const days = this.props.days;

		return (
			<div className="ski-day-list">
				<AddDayForm onNewDay={this.addNewDay}/>
				<table>
					<thead>
						<tr>
							<th>Date</th>
							<th>Resort</th>
							<th>Powder</th>
							<th>Back Country</th>
						</tr>

						<tr>
							<td colSpan={4}>
								<Link to="/skiDay">
									All Days
								</Link>
								<Link to="/skiDay/powder">
									Powder
								</Link>
								<Link to="/skiDay/backcountry">
									Back Country
								</Link>
							</td>
						</tr>
					</thead>

					<tbody>
						{days.map((day,i) =>
							<SkiDayRow key={i}
										{...day} />
						)}
					</tbody>
				</table>
			</div>
		)
	}
	
}

// Setting up default values for days if it is not being passed
SkiDayList.defaultProps = {
	days :[{
			resort:'Daman',
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

		}]
}

// propType is used for pass parameter/data in specific format also we can set that fileds is required or not 
// We can see error in console
SkiDayRow.propTypes = {
	//days : PropTypes.array
	// Custom Validation
	days : function(props) {
		if (!Array.isArray(props.days)) {
			return new Error("Ski Day List should be an array");
		} else if(!props.days.length ) {
			return new Error("Ski Day List should be empty");
		} else {
			return null;
		}
	}
}