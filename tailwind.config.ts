import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#f00",
				secondary: "#fff",
				tw: "#d8ecf8",
				accent: "#9dc3f7",
			},
		},
	},
	plugins: [],
};
export default config;
