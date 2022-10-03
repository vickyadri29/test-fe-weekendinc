/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        path2: 'url("https://i.ibb.co/rdsw0BG/Group-13641.png")',
      },
      fontFamily: {
        worksans: ["Work Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
