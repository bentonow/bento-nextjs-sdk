import colors from 'tailwindcss/colors'

const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        gray: colors.neutral,
        primary: colors.amber,
      },
    },
  },
  plugins: [],
}
export default config
