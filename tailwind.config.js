/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			sm: { max: "600px" },
			md: { max: "768px" },
			lg: { max: "991px" },
			xl: { max: "1280px" },
			"2xl": { max: "1536px" }
		},
		extend: {
			colors: {
				night: "#1B1722",
				light: "#F0F0F0"
			},
			boxShadow: {
				custom: "0px 4px 4px rgba(0, 0, 0, 0.25)"
			},
			fontFamily: {
				poppins: ["Poppins", "sans-sherif"],
				quicksand: ["Quicksand", "sans-sherif"]
			}
		}
	},
	plugins: []
};
