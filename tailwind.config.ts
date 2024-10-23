import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        schabo: ['Schabo', 'sans-serif'],
        lora: ['Lora', 'sans-serif'],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        gold: '#FFDA00',
      },
    },
  },
  plugins: [],
} satisfies Config;
