import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/globals.css",
  ],
  theme: {
    extend: {
      screens: {
        "880px": "880px",
      },
      keyframes: {
        "background-change": {
          "0%": { background: "#000" },
          "100%": {
            background:
              "linear-gradient(326deg, rgba(0, 0, 0, 1) 0%, rgba(156, 161, 179, 1) 32%, rgba(0, 0, 0, 1) 52%)",
          },
        },
      },
      boxShadow: {
        aiAssistant: "0px 13.31px 34.94px 0px rgba(0, 0, 0, 0.1)",
      },
      animation: {
        slide: "slide_17s_linear_infinite 17s linear infinite",
        "slide-paused": "slide_17s_linear_infinite 17s linear infinite paused",
        "background-change": "background-change 0.8s ease-in-out",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(326deg, rgba(0, 0, 0, 1) 0%, rgba(156, 161, 179, 1) 32%, rgba(0, 0, 0, 1) 52%)",
        gradient: "background: linear-gradient(to right, #fff 0%, #fff 13.8%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        gradient1:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.80) -1.05%, rgba(0, 0, 0, 0.00) 63.86%),linear-gradient(180deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.00) 36.53%)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      addUtilities({
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none !important",
        },
        ".no-scrollbar": {
          "scrollbar-width": "none !important",
          "-ms-overflow-style": "none !important",
        },
      });
    },
  ],
};

export default config;
