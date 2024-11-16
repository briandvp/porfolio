
/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"], // Simplificado a una cadena en lugar de un array
	content: [
"./pages/**/*.{js,ts,jsx,tsx,mdx}",
"./components/**/*.{js,ts,jsx,tsx,mdx}",
"./app/**/*.{js,ts,jsx,tsx,mdx}",
"./src/**/*.{js,jsx,tsx}"
],
prefix: "",
theme: {
container: {
	center: true,
	padding: "15px", // Considera usar un valor en rem o dentro de la escala de Tailwind
},
    screens: {
	sm: "640px",
	md: "768px",
	lg: "960px",
	xl: "1200px",
},
    fontFamily: {
	primary: "var(--font-jetbrainsMono)",
    },
    extend: {
    colors: {
    primary: "#1c1c22",
    accent:
    {
    DEFAULT: "#00ff99",
    hover: "#00e187",
    },
        },
        keyframes: {
"accordion-down": {
    from: { height: "0" },
    to: { height: "var(--radix-accordion-content-height)" },
},
"accordion-up": {
    from: { height: "var(--radix-accordion-content-height)" },
    to: { height: "0" },
},
		},
        animation: {
"accordion-down": "accordion-down 0.2s ease-out", // Agregada la 's'
"accordion-up": "accordion-up 0.2s ease-out"
		},
        },
	},
plugins: [require("tailwindcss-animate")],
};
