/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './admin.html'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#0B1220',
          900: '#0F172A',
          800: '#1E293B',
          700: '#334155',
          600: '#475569',
          500: '#64748B',
          400: '#94A3B8',
        },
        brand: {
          800: '#14532D',
          700: '#15803D',
          600: '#16A34A',
          lime: '#A6C83B',
          50: '#F0FDF4',
          100: '#DCFCE7',
        },
      },
      fontFamily: {
        sans: ['Inter', '"Pretendard Variable"', 'Pretendard', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
      },
      maxWidth: { content: '72rem' },
    },
  },
};
