import React, { Component} from 'react';
import Member from './Member';

class MemberList extends Component {
	constructor(props) {
		super(props);
		//this.eachMember = this.eachMember.bind(this);

		this.state = {
			members : [],
			loading : false
		}

		// this.state = {
		// 	members : [
		// 		{					
		// 			name : 'Divyesh Rupawala',
		// 			email : 'divyesh.rupawala@sapient.com',
		// 			thumbnail : 'https://avatars3.githubusercontent.com/u/4113351?s=460&v=4'
		// 		},
		// 		{					
		// 			name : 'Divyesh',
		// 			email : 'divyesh.rupawala@sapient.com',
		// 			thumbnail : 'https://avatars3.githubusercontent.com/u/4113351?s=460&v=4'
		// 		},
		// 		{					
		// 			name : 'Rupawala',
		// 			email : 'divyesh.rupawala@sapient.com',
		// 			thumbnail : 'https://avatars3.githubusercontent.com/u/4113351?s=460&v=4'
		// 		},
		// 		{					
		// 			name : 'Div',
		// 			email : 'divyesh.rupawala@sapient.com',
		// 			thumbnail : 'https://avatars3.githubusercontent.com/u/4113351?s=460&v=4'
		// 		}
		// 	]
		// }
	}

	componentDidMount() {
		this.setState({loading: true});

		fetch('https://randomuser.me/api/?page=1&results=25')
			.then(response => response.json())
			.then(json => json.results)
			.then(members => this.setState({members, loading: false}))


	}

	// eachMember(member, i) {
	// 	return (
	// 		<Member	key={i}				
	// 				admin={true}
	// 				name={member.name}
	// 				email={member.email}
	// 				thumbnail={member.thumbnail}
	// 				makeAdmin={(email) => console.log(email)}/>
	// 	)
	// }

	render() {
		const { members, loading } = this.state;
		return (
			<center className="member-list">
				<h1>Member List</h1> <br/>
				{(loading) ? <span>loading...</span> : 
					members.map(
						(member, i) => 
						<Member 
							key={i}
							name={member.name.first}
							email={member.email}
							thumbnail={member.picture.thumbnail} />)
				}
			</center>	
		)
	}
}

export default MemberList;