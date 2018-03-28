import React, { Component} from 'react';
import {Menu} from './Menu';

class Home extends Component {
	render() {
		return (
			<div className="home">
				<Menu />
				<div id="homebox">
					<h1> Home Page </h1>
				</div>
			</div>	
		)
	}
}

export default Home;