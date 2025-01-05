import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6D28D9",
          hover: "#5B21B6",
        },
        background: {
          light: "#F8FAFC",
          dark: "#0F172A",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
