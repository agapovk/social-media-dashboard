import { Switch } from '@headlessui/react';

const Header = ({ darkMode, toggleDarkMode }) => {
	return (
		<div className='flex flex-col justify-between divide-y divide-lightTextSecondary/50 md:flex-row md:divide-none'>
			<div className='py-3'>
				<h1
					className={`mb-1 text-2xl font-bold ${darkMode ? ' text-darkText' : ' text-lightText'}`}>
					Social Media Dashboard
				</h1>
				<p
					className={`text-sm font-bold ${
						darkMode ? ' text-darkTextSecondary' : 'text-lightTextSecondary'
					}`}>
					Total Followers: 23,004
				</p>
			</div>
			<div className='flex items-center justify-between py-4'>
				<span
					className={`mr-3 text-sm font-bold ${
						darkMode ? ' text-darkTextSecondary' : 'text-lightTextSecondary'
					}`}>
					Dark Mode
				</span>
				<Switch
					checked={darkMode}
					onChange={toggleDarkMode}
					className={`${
						darkMode ? 'bg-gradient-to-r from-toggleDark1 to-toggleDark2' : 'bg-toggleLight'
					}
          relative inline-flex h-[24px] w-[46px] shrink-0 cursor-pointer items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}>
					<span className='sr-only'>Use setting</span>
					<span
						aria-hidden='true'
						className={`${darkMode ? 'translate-x-[24px]' : 'translate-x-[4px]'}
            pointer-events-none inline-block h-[18px] w-[18px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
					/>
				</Switch>
			</div>
		</div>
	);
};

export default Header;
