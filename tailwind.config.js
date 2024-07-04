/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        fadedRed: "#DB4444",
        cantaloupe: "#FFAD33",
        silver: "#C6C6C6",
        blackk: "#1B1212",
        blacked: "#000e",
        bgGray: "grey",
      },
    },
  },
  plugins: [],
};
