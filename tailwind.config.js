/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      primaryFont: ["var(--font-alegreyasans)"],
      secondaryFont: ["var(--font-nunito)"],
    },
    extend: {
      colors: {
        'pink-100':'#FFDFDF',
        'primary':'#AC9DF1',
        'primary-700':'#877bbb',
        'primary-800':'#6f659a',
        'blue-100':'#AEDEFC',
        'blue-900':'#04578B',
        'light': '#EDEEF7',
        'black':'#0D0D0D',
        'dark': "#171717",
      },
    },
  },
  plugins: [],
}