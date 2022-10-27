/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#8a59ff",

          "secondary": "#f9d5bb",

          "accent": "#4141d8",

          "neutral": "#171320",

          "base-100": "#F1F0F5",

          "info": "#ADCAEB",

          "success": "#1CD462",

          "warning": "#F19722",

          "error": "#EC3636",
        },
      },
      "dark",
      "light"
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}