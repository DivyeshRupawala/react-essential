import React from 'react';
import PropTypes from 'prop-types';
import Terrain from 'react-icons/lib/md/terrain';
import SnowFlak from 'react-icons/lib/ti/weather-snow';
import Calendar from 'react-icons/lib/fa/calendar';

export const SkiDayRow = ({resort, date, powder, backcountry}) => (
	<tr>
		<td> {date.getMonth()+1}/{date.getDate()}/{date.getFullYear()}</td>
		<td> {resort}</td>
		<td> {(powder) ? <SnowFlak /> : null}</td>
		<td> {(backcountry) ? <Terrain/> : null}</td>
	</tr>
)

// propType is used for pass parameter/data in specific format also we can set that fileds is required or not 
// We can see error in console
SkiDayRow.propTypes = {
	resort : PropTypes.string.isRequired,
	powder : PropTypes.bool,
	date : PropTypes.instanceOf(Date).isRequired,
	backcountry : PropTypes.bool
}