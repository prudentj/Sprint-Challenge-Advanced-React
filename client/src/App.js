import React from 'react';
import './App.css';
import axios from 'axios';
import DisplayPerson from './components/DisplayPerson';
import useDarkMode from './hooks/useDarkMode';
import NavBar from './components/NavBar';
class App extends React.Component {
	constructor() {
		super();
		this.state = {
			people: []
		};
	}

	componentDidMount() {
		//Events go here
		axios
			.get('http://localhost:5000/api/players')
			.then(res => {
				this.setState({
					people: res.data
				});
				console.log(this.state.people);
			})
			.catch(err => console.log(err));
	}

	render() {
		return (
			<div>
				<NavBar />
				{this.state.people.map(el => {
					return (
						<DisplayPerson
							name={el.name}
							country={el.country}
							searches={el.searches}
							id={el.id}
						/>
					);
				})}
			</div>
		);
	}
}

export default App;
