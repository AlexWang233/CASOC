/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brown: {
          50: "#fdf8f6",
          100: "#f2e8e5",
          200: "#eaddd7",
          300: "#e0cec7",
          400: "#d2bab0",
          500: "#bfa094",
          600: "#a18072",
          700: "#977669",
          800: "#846358",
          900: "#43302b",
        },
      },
    },
  },
  safelist: [
    {
      pattern:
        /(bg|border|text)-(rose|indigo|purple|red|green|blue|brown|pink|emerald|sky|orange|cyan)-(100|200|300|400|500|600|700|800)/,
    },
  ],
  plugins: [],
};
