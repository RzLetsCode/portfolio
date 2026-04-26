/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'slate-850': '#0f172a',
        'slate-950': '#020617', // Added for that deep background
        'cyan-accent': '#00D1FF',
      },
      // You can add custom keyframes here if you prefer not to use the animate plugin
      keyframes: {
        "slide-in-from-bottom": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "slide-in-from-bottom": "slide-in-from-bottom 0.3s ease-out",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // CRITICAL for Markdown styling
    require('tailwindcss-animate'),      // For the slide-in/fade effects
  ],
};
