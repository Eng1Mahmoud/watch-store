import type { Config } from "tailwindcss";
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
          fourth: "#f3f3f3",
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
