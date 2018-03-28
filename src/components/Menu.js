import React, { Component} from 'react';
import { Link } from 'react-router';
import HomeIcon from 'react-icons/lib/fa/home'
import AddDayIcon from 'react-icons/lib/fa/calendar-plus-o'
import SkiDayIcon from 'react-icons/lib/fa/table'

export const Menu = () => (
	<nav className="manu">
		<Link to="/" activeClassName="selected"> 
			<HomeIcon/> 
		</Link>

		<Link to="/addDay" activeClassName="selected"> 
			<AddDayIcon/> 
		</Link>

		<Link to="/skiDay" activeClassName="selected"> 
			<SkiDayIcon/> 
		</Link>
	</nav>
)