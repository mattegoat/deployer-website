/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	daisyui: {
		themes: ['black', 'black'],
	},
	plugins: [require('daisyui')],
}
