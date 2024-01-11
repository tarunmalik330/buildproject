/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'BgHeader': "url('./assets/images/web.p/BgHeader.webp')",
        'BgContact': " url('./assets/images/web.p/BgContact.webp')"
      },
      backgroundSize: {
        'bgsize': "100% 100%",
      },
      screens: {
        '3xl': '1700px',
      }
    },
  },
  plugins: [],
}

