// https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js#L5
const defaultTheme = require('tailwindcss/defaultTheme');
const boxShadow = require('./src/styles/boxShadow');
const colors = require('./src/styles/colors');
const opacity = require('./src/styles/opacity');

module.exports = {
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '928px'
    },
    extend: {
      boxShadow,
      colors,
      opacity,
      container: { padding: '1.5rem', center: true },
      cursor: {
        inherit: 'inherit'
      },
      spacing: {
        '0.5': '0.125rem',
        '1.5': '0.375rem',
        '14': '3.5rem'
      },
      borderWidth: {
        default: '1px',
        '0': '0',
        '1': '1px',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '8': '8px'
      },
      fontFamily: {
        sans: ['Work Sans', ...defaultTheme.fontFamily.sans]
      },
      fontSize: {
        '2xs': '0.5625rem', // 9
        xs: '0.75rem', // 12
        sm: '0.875rem', // 14
        base: '1rem', // 16
        lg: '1.25rem', // 20
        xl: '1.375rem', // 22
        '2xl': '1.5rem', // 24
        '3xl': '2rem', // 32
        '4xl': '2.25rem', // 36
        '5xl': '3rem', // 48
        '6xl': '3.5rem', // 56
        '7xl': '7rem' // 112
      },
      zIndex: {
        '-1': '-1',
        '100': '100',
        '110': '110'
      },
      lineHeight: {
        none: '1',
        tight: '1.25',
        snug: '1.375',
        normal: '1.5',
        relaxed: '1.625',
        loose: '2',
        '3': '.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '7': '1.75rem',
        '8': '2rem',
        '9': '2.25rem',
        '10': '2.5rem',
        // custom:
        '11': '1.181818'
      },
      scale: {
        '-1': '-1'
      },
      inset: {
        '1/2': '50%'
      },
      minHeight: {
        '104': '26rem'
      }
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    borderWidth: ['responsive', 'hover', 'focus', 'active', 'last']
  }
};
