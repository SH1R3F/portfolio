/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./**/*.{html,js}"],
	theme: {
		extend: {
			fontFamily: {
				cairo: "Cairo",
				inconsolata: "Inconsolata, monospace",
				roboto: "Roboto Mono",
			},
			colors: {
				portfolio: {
					50: "#6d56c1",
					100: "#7b67c7",
				},
			},
		},
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
	},
	plugins: [require("flowbite/plugin")],
}
