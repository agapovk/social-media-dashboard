import { useState } from 'react';

import Overall from './components/Overall';
import Overview from './components/Overview';
import TopBackground from './components/TopBackground';
import Header from './components/Header';

function App() {
	const [darkMode, setDarkMode] = useState(false);

	function toggleDarkMode() {
		setDarkMode((prevDarkMode) => !prevDarkMode);
	}

	return (
		<section
			role='main'
			className={`relative min-h-screen p-6 ${darkMode ? ' bg-darkBG' : ' bg-white'}`}>
			<TopBackground darkMode={darkMode} />
			<Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
			<Overall darkMode={darkMode} />
			<Overview darkMode={darkMode} />
		</section>
	);
}

export default App;
