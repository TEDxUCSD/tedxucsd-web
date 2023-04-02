/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				"ted-red": "#EB0028",
				"footer-gray": "#222222",
			},
			fontFamily: {
				serif: ["Playfair Display", ...defaultTheme.fontFamily.serif],
			},
		},
	},
	plugins: [],
};
