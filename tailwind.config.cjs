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
			backgroundImage: {
				"sixth-sense": "url('/event-img/2022/banner.png')",
				constellate: "url('/event-img/2021/banner.png')",
				rebooted: "url('/event-img/2020/banner.png')",
				asits: "url('/event-img/2019/banner.png')",
			},
		},
	},
	plugins: [],
};
