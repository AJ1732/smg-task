/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        pjs: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        primary: {
          0o0: "#FDCA09",
          100: "#FEC00A",
        },
        secondary: {
          100: "#C82090",
        },
        grey: {
          50: "#EFF0F1",
          500: "#5A6675",
          600: "#525D6A",
        },
        black: {
          0o0: "#0B0B0B",
          100: "#101010",
        },
      },
    },
  },
  plugins: [],
};
