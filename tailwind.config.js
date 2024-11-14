/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        gradient: "gradient 15s ease infinite",
        float: "float 6s ease-in-out infinite",
        "float-delay": "floatDelay 5s ease-in-out infinite",
      },
      keyframes: {
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(45deg)" },
          "50%": { transform: "translateY(-20px) rotate(45deg)" },
        },
        floatDelay: {
          "0%, 100%": { transform: "translateY(0) rotate(-12deg)" },
          "50%": { transform: "translateY(-15px) rotate(-12deg)" },
        },
      },
    },
  },
  plugins: [],
}
