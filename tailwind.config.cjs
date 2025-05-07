/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./src/**/*.astro"],
	mode: 'jit',
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
				"expiration-date": "url('/event-img/2024/banner-2024.png')",
				"wordplay": "url('/event-img/2023/banner-2023.jpg')",
				"sixth-sense": "url('/event-img/2022/banner.jpg')",
				constellate: "url('/event-img/2021/banner.jpg')",
				rebooted: "url('/event-img/2020/banner.jpg')",
				asits: "url('/event-img/2019/banner.png')",
			},
			keyframes: {
				fadeInUp: {
				  '0%': {
					opacity: '0',
					transform: 'translateY(20px)',
				  },
				  '100%': {
					opacity: '1',
					transform: 'translateY(0)',
				  },
				},
			  },
			  animation: {
				'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
			  },
			  maxWidth: {
				'8xl': '88rem',
				'9xl': '96rem',
			  },
		},
	},
	plugins: [],
	purge: ["./src/**/*.astro"],
};
