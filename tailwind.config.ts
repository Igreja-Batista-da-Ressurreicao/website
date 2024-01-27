import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        lato: ['var(--font-lato)'],
      },
      screens: {
        xxl: '1440px'
      },
      colors:{
        brand: {
          YouTube: '#E62117',
          Spotify: '#20DF64',
          WhatsApp: '#40C351',
          Telegram: '#3FA9E0'
        }
      }
    },
  },
  plugins: [],
}
export default config
