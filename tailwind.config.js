/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        'nunito-extralight': ['Nunito-ExtraLight'],
        'nunito-light': ['Nunito-Light'],
        'nunito-regular': ['Nunito-Regular'],
        'nunito-medium': ['Nunito-Medium'],
        'nunito-semibold': ['Nunito-SemiBold'],
        'nunito-bold': ['Nunito-Bold'],
        'nunito-extrabold': ['Nunito-ExtraBold'],
        'nunito-black': ['Nunito-Black'],
        'nunitosans-extralight': ['NunitoSans-ExtraLight'],
        'nunitosans-light': ['NunitoSans-Light'],
        'nunitosans-regular': ['NunitoSans-Regular'],
        'nunitosans-semibold': ['NunitoSans-SemiBold'],
        'nunitosans-bold': ['NunitoSans-Bold'],
        'nunitosans-extrabold': ['NunitoSans-ExtraBold'],
        'nunitosans-black': ['NunitoSans-Black'],
      },
    },
  },
  plugins: [],
};