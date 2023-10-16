/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', 'src/**/*.jsx'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        md: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem'
      }
    },
    extend: {
      fontFamily: {
        'rancho' : "'Rancho', cursive",
        'raleway': "'Raleway', sans-serif"
      },
      colors: {
        "text-color": "#1B1A1A",
        "bg-color": "#ECEAE3"
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          "primary": "#E3B577",
          "secondary": "#331A15",
        },
      },
    ]
  }
}

