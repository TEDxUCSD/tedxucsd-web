/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./src/**/*.astro"],
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
				"expiration-date": "url('/event-img/2024/banner-2024.jpg')",
				"word-play": "url('/event-img/2023/banner-2023.jpg')",
				"sixth-sense": "url('/event-img/2022/banner.jpg')",
				constellate: "url('/event-img/2021/banner.jpg')",
				rebooted: "url('/event-img/2020/banner.jpg')",
				asits: "url('/event-img/2019/banner.png')",
			},
		},
	},
	plugins: [],
	purge: ["./src/**/*.astro"],
};
