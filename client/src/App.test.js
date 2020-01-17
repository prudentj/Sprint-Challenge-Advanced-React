import React from 'react';
import {render} from 'yarn ;
import ReactDOM from 'react-dom';
import App from './App';
import DisplayPerson from './components/DisplayPerson';
import NavBar from './components/NavBar';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<App />, div);
	ReactDOM.unmountComponentAtNode(div);
});

test('Results were rendered', () => {
	const container = render(<DisplayPerson />);
	container.getAllBy('Name:');
	container.getAllBy('Country:');
	container.getAllBy('Searches:');
});

test('NavBar', () => {
	const container = render(<NavBar />);
	container.getTextBy('Dark');
});
