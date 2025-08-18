/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte}'],
	theme: {
		extend: {
			fontFamily: {
				dancing: ['Dancing Script', 'cursive'],
				jura: ['Jura', 'sans-serif'],
				kolnia: ['Kolnia', 'serif'],
				orbitron: ['Orbitron', 'sans-serif']
			}
		}
	},
	plugins: [],
	darkMode: 'media'
};
