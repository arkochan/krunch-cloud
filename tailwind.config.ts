import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "1": "0px 15px 30px #e9edf2",
      },
    },
    colors: {
      gray: {
        FC: "#FCFCFD",
        F6: "#F6F6F6",
        EF: "#EFEFEF",
        D3: "#D3D1D8",
        97: "#9796A1",
        "8A": "#8A8E9B",
        "7E": "#7E8392",
        "32": "#323643",
      },

      orange: {
        FF: "#FFEBAC",
        F5: "#F58644",
        FE: "#FE724C",
      },
      yellow: "#FFC529",
      "blue-gray": {
        "9A": "#9AA0B4",
        "76": "#767F9D",
      },
      teal: "#029094",
      black: "#000000",
      white: "#FFFFFF",
    },
  },
  plugins: [],
};
export default config;
