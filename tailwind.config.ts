import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        peach: {
          DEFAULT: "#fe8160", // peach-300
          100: "#fed2c7",
          200: "#fea58d",
          300: "#fe8160", // Default peach color
          400: "#e28971",
        },
        yellow: {
          DEFAULT: "#ffd050", // yellow-300
          100: "#ffefc3",
          200: "#ffdf8b",
          300: "#ffd050", // Default yellow color
          400: "#ffc529",
        },
        gray: {
          DEFAULT: "#4d5364", // gray-300 (dark-gray)
          100: "#6e7489",
          200: "#4d5364", // Default dark gray color
          300: "#2a2f3d",
          400: "#1a1d26",
        },
        lightGray: {
          DEFAULT: "#a8acb9", // light-gray-300
          100: "#ebebeb",
          200: "#c4c7d0",
          300: "#a8acb9", // Default light gray color
          400: "#9a9fae",
        },
      },
    },
  },
  plugins: [],
};
export default config;
