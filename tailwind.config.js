module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        primary: '#242424',
        secondary: '#F8BB08',
        light: '#F0EFEF',
        gray: '#565584',
      },
      fontFamily: {
        'body': ['Open Sans'],
        'judson': ['Judson'],
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        '16': 'repeat(16, minmax(0, 1fr))',

        // Complex site-specific column configuration
        'footer': '200px minmax(900px, 1fr) 100px',
      }
    },
  },
  plugins: [],
}
