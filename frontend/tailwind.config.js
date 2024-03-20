/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ["'Nunito Sans'"],
    },
    extend: {
      colors: {
        limeMain: '#40c057',
        limeLight: '#c0eb75',
        limeHover: '#37b24d',
        greyMain: '#868e96',
        greyLight: '#f8f9fa',
        greyMedium: '#adb5bd',
      },
    },
  },
  plugins: [],
};
