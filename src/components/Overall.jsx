import { data } from '../data/data';

const Overall = ({ darkMode }) => {
	return (
		<main className='mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4'>
			{data.overallCards.map((card, index) => {
				return (
					<div
						className={`relative flex flex-col items-center rounded-md p-6 hover:cursor-pointer ${
							darkMode
								? 'bg-darkCardBG hover:bg-darkCardBGHover'
								: 'bg-lightCardBG hover:bg-lightCardBGHover'
						}`}
						key={index}>
						<div className={`absolute top-0 h-1 w-full rounded-t-md ${card.bg}`}></div>
						<div className='mt-2 mb-6 flex items-center justify-between space-x-2'>
							<img src={`./${card.icon}.svg`} alt='social-icon' />
							<p
								className={`text-sm font-bold ${
									darkMode ? 'text-darkTextSecondary' : 'text-lightTextSecondary'
								}`}>
								{card.name}
							</p>
						</div>
						<h1
							className={`mb-1 text-[54px] font-bold ${
								darkMode ? 'text-darkText' : 'text-lightText'
							}`}>
							{card.index}
						</h1>
						<p
							className={`mb-5 text-sm tracking-[0.4rem] ${
								darkMode ? 'text-darkTextSecondary' : 'text-lightTextSecondary'
							}`}>
							{card.metric.toUpperCase()}
						</p>
						{card.today > 0 ? (
							<div className='flex items-center space-x-1'>
								<img src='./icon-up.svg' alt='up' />
								<p className='text-sm font-bold text-green'>{card.today} Today</p>
							</div>
						) : (
							<div className='flex items-center space-x-1'>
								<img src='./icon-down.svg' alt='down' />
								<p className='text-sm font-bold text-red'>{card.today.toString().slice(1)} Today</p>
							</div>
						)}
					</div>
				);
			})}
		</main>
	);
};

export default Overall;
