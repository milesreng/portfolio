/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      fontFamily: {
        'content': ["'Noto Sans Mono'", 'monospace']
      }
    },
  },
  plugins: [],
}

