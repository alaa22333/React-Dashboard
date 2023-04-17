const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      primary: "#1e293b",
      secondary: "#9ca3af",
      mainColor: "#3b82f6",
      bground: "#f1f5f9",
      darkPrimary: "#f1f5f9",
      secDrBg: "#d1d5db",

      
    },
    height: {
      67: "67vh",
      100: "100vh",
      40: "40vh",
      27:"27vh"
    },
    right: {
      23: "-23px",
    },

    extend: {},
  },
  plugins: [],
});
