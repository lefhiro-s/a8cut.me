// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        dark:    "#130d17",  // fondo principal
        light:   "#f2f2f0",  // texto y fondos secundarios
        primary:        "#FF007F",  // magenta intenso
        'primary-dark': "#A50057",  // magenta oscuro
        secondary:      "#FFC300",  // dorado vibrante
        'secondary-dark': "#B58900",  // dorado oscuro
        neutral:        "#000000",  // negro puro
        'neutral-dark': "#111111",  // negro más profundo
        accent:         "#FFFFFF",  // blanco puro
        'accent-dark':  "#DDDDDD",  // gris clar
        detail:         "#222222",  // gris oscuro
        'detail-dark':  "#111111",  // gris más oscuro
      },
      fontFamily: {
        sans:    ["Inter", "sans-serif"],
        display: ["Orbitron", "sans-serif"],
      },
      animation: {
        orbit:          "orbit 20s linear infinite",
        "orbit-reverse":"orbit-reverse 30s linear infinite",
        "slow-spin":    "spin 60s linear infinite",
        "fade-in-up":   "fadeInUp 0.6s ease-out both",
        expandSpin:     "expandSpin var(--spin-duration,4s) ease-in-out forwards",
        float:          "float 4s ease-in-out infinite",
        "fade-slow":    "fade 5s ease-in-out infinite",
        wiggle:         "wiggle 2s ease-in-out infinite",
        "bounce-horizontal":"bounceX 2s infinite",
      },
      keyframes: {
        orbit: {
          "0%":   { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "orbit-reverse": {
          "0%":   { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        fadeInUp: {
          "0%":   { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)"     },
        },
        expandSpin: {
          "0%":   { transform: "scale(1)" },
          "20%":  { transform: "scale(1.05)" },
          "50%":  { transform: "scale(1.1)"  },
          "80%":  { transform: "scale(1.05)" },
          "100%": { transform: "scale(1)"    },
        },
        float: {
          "0%,100%": { transform: "translateY(0)"   },
          "50%":     { transform: "translateY(-10px)" },
        },
        fade: {
          "0%,100%": { opacity: 0.6 },
          "50%":     { opacity: 1   },
        },
        wiggle: {
          "0%,100%": { transform: "rotate(-2deg)" },
          "50%":     { transform: "rotate(2deg)"  },
        },
        bounceX: {
          "0%,100%": { transform: "translateX(0)"  },
          "50%":     { transform: "translateX(6px)" },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};