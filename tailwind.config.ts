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
    extend: {
      colors: {
        main: {
          main: "#406939",
          hover: "#4e7d4e",
        },
        text: {
          main: "#333333",
          secondary: "#6b7280",
          third: "#ffffff",
        },
        error: {
          main: "#ff0000",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
