const TopBackground = ({ darkMode }) => {
	return (
		<div
			className={`absolute top-0 left-0 -z-10 h-60 w-full rounded-b-2xl ${
				darkMode ? 'bg-darkTopBG' : 'bg-lightTopBG'
			}`}></div>
	);
};

export default TopBackground;
