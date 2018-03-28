import React, { Component}  from 'react';
import {Menu} from './Menu';

// Stateless component
export const AddDayForm = ({ resort, date, powder, backcountry, onNewDay}) => {

	let _resort, _date, _powder, _backcountry;

	const submit = (e) => {
		e.preventDefault();

		onNewDay({
			resort : _resort.value,
			date: _date.value,
			powder: _powder.checked,
			backcountry: _backcountry.checked
		});

		// Reset value

		_resort.value = '';
		_date.value = '';
		_powder.checked = false;
		_backcountry.checked = false;

		console.log("Resort : "+_resort.value);
		console.log("Date : "+_date.value);
		console.log("Powder : "+_powder.checked);
		console.log("backcountry : "+_backcountry.checked);	
	}	

	return (
		<form className="add-day-form" onSubmit={submit}>
			<h1> Add Day </h1>
			<label htmlFor='resport'>Resort Name </label>
			<input 
				id="resport" 
				type="text" 
				required 
				defaultValue={resort}
				ref={input => _resort = input}/>

			<label htmlFor='date'>Date</label>
			<input id="date" type="date" required defaultValue={date} ref={input => _date = input}/>
			<div>
				<input id="powder" type="checkbox" required defaultChecked={powder} ref={input => _powder = input}/>
				<label htmlFor='powder'>Powder</label>
			</div>
			
			<div>
				<input id="backcountry" type="checkbox" required defaultChecked={backcountry} ref={input => _backcountry = input}/>
				<label htmlFor='backcountry'>Back Country</label>
			</div>

			<button> Add Days</button>	
		</form>
	)
}

// State full component ES6 class  
// export class AddDayForm extends Component {
// 	constructor(props) {
// 		super(props);

// 		this.submit = this.submit.bind(this);
// 	}

// 	submit(e) {
// 		e.preventDefault();
// 		console.log("Resort : "+this.refs.resort.value);
// 		console.log("Date : "+this.refs.date.value);
// 		console.log("Powder : "+this.refs.powder.checked);
// 		console.log("backcountry : "+this.refs.backcountry.checked);	
// 	}

// 	render() {
// 		const { resort, date, powder, backcountry } = this.props;

// 		return (
// 			<form className="add-day-form" onSubmit={this.submit}>
// 				<h1> Add Day </h1>
// 				<label htmlFor='resport'>Resort Name </label>
// 				<input 
// 					id="resport" 
// 					type="text" 
// 					required 
// 					defaultValue={resort}
// 					ref="resort"/>

// 				<label htmlFor='date'>Date</label>
// 				<input id="date" type="date" required defaultValue={date} ref="date"/>
// 				<div>
// 					<input id="powder" type="checkbox" required defaultChecked={powder} ref="powder"/>
// 					<label htmlFor='powder'>Powder</label>
// 				</div>
				
// 				<div>
// 					<input id="backcountry" type="checkbox" required defaultChecked={backcountry} ref="backcountry"/>
// 					<label htmlFor='backcountry'>Back Country</label>
// 				</div>

// 				<button> Add Days</button>	
// 			</form>
// 		)
// 	}
// }

AddDayForm.defaultProps = {
	resort:'Daman',
	date : '08/08/2018',
	powder : true,
	backcountry : false
}