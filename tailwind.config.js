/** @type {import('tailwind.config').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#070F1C', // Background color [cite: 819]
          800: '#0A1628', // Button/Card backgrounds [cite: 554]
        },
        gold: {
          DEFAULT: '#C9A94E', // Accent color [cite: 477, 544]
          light: '#F0D080',
        },
        medical: {
          blue: '#4A90D9', // "In Development" status [cite: 515]
          green: '#5DB8A0', // "Series A" badge [cite: 537]
          slate: '#8899BB', // Secondary text [cite: 498, 547]
        }
      },
      fontFamily: {
        // 'font-playfair' will now use the Google Font variable
        playfair: ['var(--font-playfair)', 'serif'], 
        // 'font-dm-sans' will now use the Google Font variable
        dmSans: ['var(--font-dm-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
