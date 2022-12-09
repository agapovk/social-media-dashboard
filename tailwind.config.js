/** @type {import('tailwindcss').Config} */

function withOpacity(color) {
	return ({ opacityValue }) => {
		if (opacityValue !== undefined) {
			return `hsl(${color} / ${opacityValue})`;
		}
		return `${color}`;
	};
}

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		screens: {
			sm: '375px',
			md: '760px',
			lg: '1440px',
		},
		colors: {
			// #### Base
			white: withOpacity('255 255% 255%'),
			black: withOpacity('0 0% 0%'),
			transparent: 'transparent',

			// #### Toggle mode
			toggleDark1: 'hsl(210, 78%, 56%)',
			toggleDark2: 'hsl(146, 68%, 55%)',
			toggleLight: withOpacity('230 22% 74%'),

			// // #### Dark Theme
			darkBG: withOpacity('230 17% 14%'),
			darkTopBG: withOpacity('232 19% 15%'),
			darkCardBG: withOpacity('228 28% 20%'),
			darkCardBGHover: withOpacity('228 26% 27%'),
			darkText: withOpacity('255 255% 255%'),
			darkTextSecondary: withOpacity('228 34% 66%'),

			// // #### Light Theme
			lightTopBG: withOpacity('225 100% 98%'),
			lightCardBG: withOpacity('227 47% 96%'),
			lightCardBGHover: withOpacity('232 33% 91%'),
			lightTextSecondary: withOpacity('228 12% 44%'),
			lightText: withOpacity('230 17% 14%'),

			// #### Up & down arrows
			green: withOpacity('163 72% 41%'),
			red: withOpacity('356 69% 56%'),

			// #### Social border colors
			fb: withOpacity('208 92% 53%'),
			tw: withOpacity('203 89% 53%'),
			in1: 'hsl(37, 97%, 70%)',
			in2: 'hsl(329, 70%, 58%)',
			yt: withOpacity('348 97% 39%'),
		},
		extend: {},
	},
	plugins: [],
};
