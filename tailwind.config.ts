import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],

  theme: {
    fontFamily: {
      main: ["main", "sans-serif"],
    },
    colors: {
      main: "#f55",
      second: "#1fff",
    },

    container: {
      center: true,
      padding: {
        DEFAULT: ".5rem",
        sm: ".5rem",
        lg: "1.5rem",
        xl: "3rem",
        "2xl": "5rem",
      },
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
export default config;
