module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#dec800",
      "primary-dark": "#c2af00",
      warn: "#f84545",
      light: "#f2f2f2",
      dark: "#373737",
      hint: "#bbbbbb",
      white: "#ffffff",
    },
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      spacing: {
        sm: "1.5",
        md: "2.5",
      },
      animation: {
        bounce200: "bounce 1s infinite 200ms",
        bounce400: "bounce 1s infinite 400ms",
      },
    },
  },
  plugins: [],
};
