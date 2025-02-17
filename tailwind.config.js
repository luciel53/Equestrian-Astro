/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        CRC35: ["CRC35", "sans-serif"],
        Signature: ["Signature", "sans-serif"],
      },
    },
  },
  plugins: [],
};
