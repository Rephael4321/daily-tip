import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}", // Your main app pages
    "./components/**/*.{ts,tsx}", // Your components
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
