import { data } from '../data/data';

const Overview = ({ darkMode }) => {
	return (
		<div>
			<h1
				className={`mt-10 mb-6 text-2xl font-bold ${
					darkMode ? 'text-darkText' : 'text-lightTextSecondary'
				}`}>
				Overview - Today
			</h1>
			<div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4'>
				{data.overviewCards.map((card, index) => {
					return (
						<div
							className={`flex flex-col space-y-6 rounded-md  p-6 hover:cursor-pointer ${
								darkMode
									? 'bg-darkCardBG hover:bg-darkCardBGHover'
									: 'bg-lightCardBG hover:bg-lightCardBGHover'
							}`}
							key={index}>
							<div className='flex items-center justify-between'>
								<p
									className={`text-sm font-bold ${
										darkMode ? 'text-darkTextSecondary' : 'text-lightTextSecondary'
									}`}>
									{card.name}
								</p>
								<img src={`./${card.icon}.svg`} alt='social-icon' className='' />
							</div>
							<div className='flex items-end justify-between'>
								<h1
									className={`text-3xl font-bold ${
										darkMode ? 'text-darkText' : 'text-lightTextSecondary'
									}`}>
									{card.index}
								</h1>
								{card.percent > 0 ? (
									<div className='flex items-center space-x-1'>
										<img src='./icon-up.svg' alt='up' />
										<p className='text-sm font-bold text-green'>{card.percent}%</p>
									</div>
								) : (
									<div className='flex items-center space-x-1'>
										<img src='./icon-down.svg' alt='down' />
										<p className='text-sm font-bold text-red'>
											{card.percent.toString().slice(1)}%
										</p>
									</div>
								)}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Overview;
