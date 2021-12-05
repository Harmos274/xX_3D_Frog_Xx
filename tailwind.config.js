module.exports = {
  purge: {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    safelist: [
      'bg-green-800',
      'bg-red-500',
      'bg-purple-800',
      'bg-purple-900',
      'bg-blue-500',
      'bg-blue-800',
      'bg-yellow-300'
    ]
  },
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
