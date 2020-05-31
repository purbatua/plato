/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  purge: ['./src/**/*.html', './src/**/*.vue'],
  theme: {
    extend: {
      fontSize: {
        '2xs': '.7rem'
      },
      width: {
        '18': '4.5rem'
      },
      height: {
        '18': '4.5rem'
      }
    }
  },
  variants: {},
  plugins: []
}
