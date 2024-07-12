/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Nunito Variable", ...defaultTheme.fontFamily.sans],
				serif: ["Lora Variable", ...defaultTheme.fontFamily.serif],
			},
			colors: {
				"dark-green": "#163623",
				"outer-space": "#3B4B4D",
				timberwolf: "#E1DAD1",
				"reseda-green": "#5D715C",
				"cal-poly-green": "#0F5A20",
			},
		},
	},
	plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
