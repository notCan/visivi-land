const colors = require("tailwindcss/colors");
import { luiPlugin } from '@lui-ui/lui-tailwindcss';

module.exports = {
  darkMode: "class",
  plugins: [require("@tailwindcss/typography")],
  content: ["content/**/*.{md,yml,json,json5,csv}"],
  theme: {
    extend: {
      colors: {
        // Customize the feeling of your site
        // gray: colors.stone,
        warning: colors.yellow,
        secondary: colors.slate,
        danger: colors.red,
        success: colors.green,
        'primary': {
          DEFAULT: '#6C4BF6',
          50: '#FBFAFF',
          100: '#EBE6FE',
          200: '#CBC0FC',
          300: '#AB99FA',
          400: '#8C72F8',
          500: '#6C4BF6',
          600: '#4016F3',
          700: '#2E0AC7',
          800: '#220791',
          900: '#15055C',
          950: '#0F0341'
        },
        info: {
          DEFAULT: "#267EFF",
          50: "#DEEBFF",
          100: "#C9DFFF",
          200: "#A0C7FF",
          300: "#78AFFF",
          400: "#4F96FF",
          500: "#267EFF",
          600: "#0060ED",
          700: "#0049B5",
          800: "#00337D",
          900: "#001C45",
        },
      },
      screens: {
        "2xl": "1280px",
      },
      fontFamily: {
        spaceGrotesk: ["Space Grotesk", 'sans-serif'],
      },
    },
  },
  plugins: [
        require("@tailwindcss/typography"),
        luiPlugin()
    ],
};
