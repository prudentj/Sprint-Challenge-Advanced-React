import React, {useEffect} from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = function(key) {
	const [darkMode, setDarkMode] = useLocalStorage('darkMode', key);
	const body = document.querySelector('body');

	useEffect(() => {
		if (darkMode === true) {
			body.classList.add('dark-mode');
		} else {
			body.classList.remove('dark-mode');
		}
	});
	return [darkMode, setDarkMode];
};

export default useDarkMode;
