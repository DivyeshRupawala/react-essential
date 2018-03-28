import React, { Component} from 'react';
import FaShield from 'react-icons/lib/fa/shield';

export default class Member extends Component {
	render() {
		const {name, admin, email, thumbnail, makeAdmin} = this.props;
		return (
			<div style={{marginBottom: '20px',float:'left',border:'1px solid gray', textAlign:'center',marginRight:'20px',width:'250px', height:'160px', overflowY:'auto'}}>
				<h1>{name} {(admin) ? <FaShield /> : null}</h1>
				{(admin) ? null : <a onClick={makeAdmin}> Make Admin </a>}				
				<br/><img src={thumbnail} /> <br/>
				<a href={`mailTo:${email}`}>{email} </a>
			</div>
		)
	}
}