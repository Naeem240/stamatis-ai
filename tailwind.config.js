/** @type {import('tailwind.config').Config} */
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary Colors - Main brand colors
        primary: {
          light: '#F0D080',
          DEFAULT: '#C9A94E', // Gold accent
          dark: '#A67C3D',
          foreground: '#FFFFFF',
        },
        // Secondary Colors
        secondary: {
          light: '#E8F4F8',
          DEFAULT: '#5DB8A0', // Medical green
          dark: '#2D8674',
          foreground: '#FFFFFF',
        },
        // Accent Colors
        accent: {
          blue: '#4A90D9',
          slate: '#8899BB',
          purple: '#9B7FD4',
        },
        // Base/Neutral Colors
        base: {
          dark: '#070F1C',      // Dark background
          darkAlt: '#0A1628',   // Dark background alternative
          light: '#FFFFFF',     // Light background
          lightAlt: '#F8F9FA',  // Light background alternative
        },
        // Background and foreground palette
        background: '#FFFFFF',
        foreground: '#070F1C',
        muted: '#E5E7EB',
        input: '#F8FAFC',
        border: '#D0D8E0',
        ring: '#C9A94E',
        destructive: {
          DEFAULT: '#EF4444',
          light: '#FEE2E2',
          dark: '#B91C1C',
        },
        // Text Colors
        text: {
          primary: '#070F1C',
          secondary: '#5D6B7F',
          tertiary: '#8899BB',
          light: '#FFFFFF',
          dark: '#070F1C',
        },
        // Legacy brand colors (for backward compatibility)
        navy: {
          900: '#070F1C',
          800: '#0A1628',
        },
        gold: {
          DEFAULT: '#C9A94E',
          light: '#F0D080',
        },
        medical: {
          blue: '#4A90D9',
          green: '#5DB8A0',
          slate: '#8899BB',
        }
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'serif'], 
        dmSans: ['var(--font-dm-sans)', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
