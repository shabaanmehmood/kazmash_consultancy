import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: "#4D8BC1",
  			secondary: "#AAD243",
  			textp: '#757575',
  		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
