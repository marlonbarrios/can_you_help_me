module.exports = {
  darkMode: 'class',
  presets: [require('@vercel/examples-ui/tailwind')],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './contexts/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.css',
    './node_modules/@vercel/examples-ui/**/*.js',
  ],
}
