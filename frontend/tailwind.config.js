/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/components/(toast|spinner).js"
  ],
  theme: {
    extend: {
      backgroundColor: {
        mainBackground: "#171717",
        buttonBackground: "#2b2b2b",
        darkBackground: "#1c1c1c"
      },
      colors: {
        textColor: "#858585",
        logoColor: "#383838",
        borderColor: "#4c4c4c"
      },
      fontFamily: {
        title: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "serif"]
      }
    }
  },
  plugins: []
};
