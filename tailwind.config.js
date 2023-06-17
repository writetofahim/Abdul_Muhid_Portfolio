/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter Tight", "sans-serif"],
      title: ["Abhaya Libre", "serif"],
    },
    extend: {
      colors: {
        primary: {
          50: "#fffff3",
          100: "#ffffdb",
          200: "#ffffb2",
          300: "#ffff89",
          400: "#ffff60",
          500: "#ceff24", // Base color
          600: "#a3d900",
          700: "#78b200",
          800: "#4d8a00",
          900: "#235100",
          950: "#0c2c00",
        },
        secondary: {
          50: "#f5fafb",
          100: "#eaf5f6",
          200: "#d5ebed",
          300: "#bfe0e3",
          400: "#a9d6da",
          500: "#9db8b9", // Base color
          600: "#8a9697",
          700: "#778384",
          800: "#646f71",
          900: "#515c5e",
          950: "#3e494b",
        },
        ascent: {
          50: "#f2f5f6",
          100: "#dbe1e2",
          200: "#b7c4c6",
          300: "#93a7aa",
          400: "#6f898c",
          500: "#182928", // Base color
          600: "#141d20",
          700: "#10171a",
          800: "#0c1012",
          900: "#080a0b",
          950: "#040505",
        },
      },
    },
  },
  plugins: [],
};
