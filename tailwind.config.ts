import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],

  theme: {
    fontFamily: {
      main: ["var(--main-font)", "sans-serif"],
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
      backgroundImage: {
        hero: "url('/assets/about/bg-about.jpeg')",
      },
      boxShadow: {
        custom: "0 0 3px 1px rgba(0, 0, 0, 0.3)",
      },
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
