/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  safelist: [
    {
      pattern:
        /(bg|border|text)-(rose|indigo|purple|red|green|blue|brown)-(100|200|300|400|500|600|700|800)/,
    },
  ],
  plugins: [],
};
