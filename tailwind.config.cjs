/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Inter', 'serif'],
      },
      colors: {
        /* Color Palletes */
        'primary-light': 'var(--primary-light)',
        'primary-normal': 'var(--primary-normal)',
        'secundary-normal': 'var(--secundary-normal)',

        /* Border */
        'app-border': 'var(--app-border)',
        
        /* Custom Elements */
        'main-bg': 'var(--main-bg)',

        /* Font Colors */
        'normal-font': 'var(--normal-font)',
        'dark-font': 'var(--dark-font)',
        'title-font': 'var(--title-font)',
      },
      width: {
        'sidebar-width': 'var(--sidebar-width)',
      },
      height: {
        'header-height': 'var(--header-height)',
      },
      minHeight: {
        'sidebar-height': 'var(--sidebar-height)',
      },
      borderWidth: {
        1: '1px',
      },
    },
  },
  plugins: [],
};
