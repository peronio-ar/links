/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      roboto: ["Roboto Regular"],
      baskerville: ["New Baskerville"],
      share: ["Share Regular", "Georgia"],
      trade: ["Trade Gothic Regular"],
      abril: ["Abril Fat Face"],
    },
    extend: {},
  },
  plugins: [],
};
