/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main : {
          100: "#f1c40f",
          200: "#07bc0c",
          300: "#f19489",
        }
      }
    },
  },
  plugins: [],
};
