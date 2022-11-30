/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./**/*.{html,js}"],
	theme: {
		extend: {},
		container: {
			center: true,
			padding: "1rem",
			screens: {
				sm: "576px",
				md: "768px",
				lg: "992px",
				xl: "1200px",
			},
		},
		fontFamily: {
			cairo: "Cairo",
			roboto: "Roboto Mono",
		},
	},
	plugins: [],
	corePlugins: {
		preflight: false,
	},
}
