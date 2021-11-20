const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      gridTemplateColumns: {
        episode: '80px auto',
      },
      fontSize: {
        '2xs': [
          '0.7rem',
          {
            lineHeight: '0.75rem',
          },
        ],
      },
    },
    maxWidth: {
      0: '0',
      50: '200px',
      half: '50%',
      full: '100%',
    },
    maxHeight: {
      0: '0',
      50: '200px',
      full: '100%',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
}
