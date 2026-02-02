/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        primary: "#2957A4", // Christ University Blue
        secondary: "#f3f4f6",
        accent: "#D2AE6D", // Christ University Gold
        "cu-blue": "#2957A4",
        "cu-gold": "#D2AE6D",
        "cu-black": "#201E1E",
        glass: "rgba(255, 255, 255, 0.8)",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-glow": "conic-gradient(from 180deg at 50% 50%, #2a0e61 0deg, #10002b 50%, #2a0e61 100%)",
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
