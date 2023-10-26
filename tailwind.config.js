/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },width: {
        '1/4': '25%',
        '1/3': '33.3333%',
        '1/2': '50%',
        '2/3': '66.6667%',
        '3/4': '75%',
      },
      borderColor: {
        'e-4': '#your-custom-border-color',
      },
      display: ['group-hover']
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
],
}
