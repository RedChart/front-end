import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      main: {
        DEFAULT: "#f86978",
        light: "#ffe3e6",
      },
      point: {
        DEFAULT: "#6979f8",
        light: "#e7e9fe",
        yellow: "#f8e969",
        orange: "#f8a269",
      },
      background: "#fafafa",
      white: "#ffffff",
      gray: {
        200: "#eeeeee",
        300: "#e0e0e0",
        400: "#bdbdbd",
        500: "#9e9e9e",
        600: "#757575",
        700: "#616161",
        900: "#212121",
      },
    },
  },
  plugins: [],
};
export default config;
