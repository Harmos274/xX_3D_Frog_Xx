module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      inset: {
        '1/5': '20%',
        '1/10': '10%'
      }
    }
  },
  variants: {
    extend: { backgroundColor: ['active'] },
  },
  plugins: [],
}
