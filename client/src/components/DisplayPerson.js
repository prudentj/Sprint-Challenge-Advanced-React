import React from 'react';

function DisplayPerson(props) {
	return (
		<div>
			<h2>Name:{props.name}</h2>
			<h3>Country:{props.country}</h3>
			<h3>Searches:{props.searches}</h3>
		</div>
	);
}
export default DisplayPerson;
