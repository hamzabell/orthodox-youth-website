/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Orthodox primary colors (from orthodoxng.com)
        orthodox: {
          primary: '#112722',    // Deep green/teal - main brand color
          gold: '#d3e97c',       // Muted gold/yellow - traditional Orthodox accent
          cyan: '#7dd6e8',       // Soft cyan/blue - complementary accent
          
          // Youth-focused vibrant variants
          'gold-vibrant': '#e6ff33',     // Brighter gold for youth elements
          'cyan-vibrant': '#00d4ff',     // More vibrant cyan
          'green-light': '#1a4434',      // Lighter version of primary
          'green-dark': '#0a1811',       // Darker version for depth
        },
        
        // Extended palette for youth website
        youth: {
          primary: '#112722',      // Same as Orthodox primary for consistency
          secondary: '#d3e97c',    // Orthodox gold
          accent: '#7dd6e8',       // Orthodox cyan
          
          // Energetic youth colors while respecting Orthodox aesthetic
          energy: '#ffcc00',       // Warm energetic yellow
          hope: '#4ade80',         // Fresh green for hope/growth
          community: '#a855f7',    // Purple for community/unity
          faith: '#3b82f6',        // Blue for faith/stability
          
          // Neutral variations
          light: '#f8fafc',        // Light background
          muted: '#64748b',        // Muted text
          dark: '#1e293b',         // Dark text/headings
        },
        
        // Override shadcn/ui theme colors with Orthodox palette
        primary: {
          DEFAULT: '#112722',      // Orthodox primary green
          foreground: '#ffffff',
          50: '#f0f9ff',
          100: '#e0f2fe', 
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#112722',          // Our Orthodox primary
          600: '#0c1d1a',
          700: '#081612',
          800: '#041009',
          900: '#020804',
          950: '#010402',
        },
        
        secondary: {
          DEFAULT: '#d3e97c',      // Orthodox gold
          foreground: '#112722',
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#d3e97c',          // Our Orthodox gold
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
          950: '#422006',
        },
        
        accent: {
          DEFAULT: '#7dd6e8',      // Orthodox cyan
          foreground: '#112722',
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd6e8',          // Our Orthodox cyan
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
      },
      
      fontFamily: {
        // Orthodox typography (from orthodoxng.com analysis)
        'orthodox-heading': ['Besley Narrow', 'Georgia', 'serif'],
        'orthodox-body': ['Crimson Pro', 'Georgia', 'serif'],
        
        // Modern variants for youth appeal while maintaining dignity
        'youth-heading': ['Inter', 'Besley Narrow', 'system-ui', 'sans-serif'],
        'youth-body': ['Inter', 'Crimson Pro', 'system-ui', 'sans-serif'],
        
        // Keep existing Inter as primary
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      
      spacing: {
        // Orthodox-inspired spacing scale
        'orthodox': '1.618rem',   // Golden ratio spacing
        'orthodox-sm': '1rem',
        'orthodox-lg': '2.618rem',
        'orthodox-xl': '4.236rem',
      },
      
      borderRadius: {
        // Softer, more welcoming radius for youth
        'orthodox': '0.375rem',   // Slightly more rounded than default
        'orthodox-lg': '0.75rem',
        'orthodox-xl': '1.5rem',
      },
      
      boxShadow: {
        // Gentle shadows that feel warm and welcoming
        'orthodox': '0 4px 6px -1px rgba(17, 39, 34, 0.1), 0 2px 4px -1px rgba(17, 39, 34, 0.06)',
        'orthodox-lg': '0 10px 15px -3px rgba(17, 39, 34, 0.1), 0 4px 6px -2px rgba(17, 39, 34, 0.05)',
      },
      
      animation: {
        // Subtle, respectful animations
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-subtle': 'bounceSubtle 2s infinite',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceSubtle: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-3px)' },
          '60%': { transform: 'translateY(-2px)' },
        },
      },
    },
  },
  plugins: [],
}