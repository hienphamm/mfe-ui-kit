module.exports = {
  content: [
    './src/**/*.{ts,tsx,html}',
    './src/components/**/*.{ts,tsx}',
    './src/index.html'
  ],
  important: ':host', // Makes styles pierce shadow DOM
  corePlugins: {
    preflight: false, // Disable default styles
  },
  theme: {
    extend: {
      boxShadow: {
        sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      }
    },
  },
  plugins: [],
}
