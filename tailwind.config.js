/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	daisyui: {
		styled: true,
		themes: true,
		base: true,
		utils: true,
		// logs: true,
		rtl: false,
		prefix: '',
		darkTheme: 'black',
	},
	darkMode: 'class',
	theme: {
		extend: {},
	},
	plugins: [require('daisyui')],
}
