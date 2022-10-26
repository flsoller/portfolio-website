module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bgColor: '#FCFCFC',
        bgCode: '#1f2937',
      },
    },
  },
  variants: {
    extend: {
      flexDirection: ['even'],
    },
  },
  plugins: [],
};
