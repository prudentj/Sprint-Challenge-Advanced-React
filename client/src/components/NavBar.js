import React from 'react';
import useDarkMode from '../hooks/useDarkMode';

function NavBar() {
	const [darkMode, setDarkMode] = useDarkMode('darkMode');
	const toggleMode = el => {
		el.preventDefault();
		setDarkMode(!darkMode);
	};
	return (
		<div>
			<button onClick={toggleMode}>Dark Mode</button>
		</div>
	);
}
export default NavBar;
