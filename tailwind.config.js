/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'custom-black': '#222',
				'custom-blue': '#082032',
				'custom-dark-gray': '#2C394B',
				'custom-dark-green': '#334756',
				'custom-light-gray': '#D2D2D2',
				'custom-red': '#FF4C29',
			},
		},
	},
	plugins: [],
};
