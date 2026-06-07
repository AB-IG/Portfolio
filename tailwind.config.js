/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // ── Dark warm palette ─────────────────────
        night:  '#0F0F0D',   // main bg
        sub:    '#1A1A17',   // bg-subtle (hover rows, alt sections)
        lift:   '#242420',   // bg-elevated
        wire:   '#2A2A26',   // borders / dividers
        cream:  '#F0EDE6',   // text-primary / accent (warm off-white)
        stone:  '#A09D96',   // text-secondary
        soot:   '#5C5A55',   // text-muted
        void:   '#080807',   // footer bg
      },
    },
  },
  plugins: [],
}
