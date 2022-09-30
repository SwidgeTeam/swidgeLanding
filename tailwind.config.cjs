/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
],
darkMode: 'class', // or 'media' or 'class'
theme: {
    fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        roboto: ['Roboto', 'system-ui', 'sans-serif'],
    },
    screens: {
        'xs': '413px', // => @media (min-width: 413px)
        'sm': '640px', // => @media (min-width: 640px)
        'md': '768px', // => @media (min-width: 768px)
        'lg': '1024px', // => @media (min-width: 1024px)
        'xl': '1280px', // => @media (min-width: 1280px)
        '2xl': '1536px', // => @media (min-width: 1536px)"],
    },
    extend: {
    },
  },
    plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
      require('@tailwindcss/typography'),
  ],
}
