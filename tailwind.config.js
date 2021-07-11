const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: {
    content: ['./**/*.pug'],
    options: {
      safelist: [],
    },
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', ...defaultTheme.fontFamily.sans],
        serif: ['Arvo', ...defaultTheme.fontFamily.serif],
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
