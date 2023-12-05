/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    screens: {
      "sm": "592px",
      "md": "768px",
      "lg": "1280px"
    },
    extend: {
      colors: {
        "transparent": "transparent",
        "blue": "hsl(227, 92%, 58%)",
        "gun-metal": "hsl(215, 31%, 21%)",
        "dark-electric-blue": "hsl(215, 17%, 45%)",
        "borders": "hsl(200, 24%, 88%)",
        "pure-white": "hsl(0, 0%, 100%)",
        "hero-from": "hsla(184, 95%, 92%, 0%)",
        "hero-to": "hsl(216, 95%, 92%)",
        "form-from": "hsl(227, 92%, 59%)",
        "form-to": "hsl(227, 92%, 67%)",
        "advice-from": "hsla(216, 95%, 92%, 30%)",
        "advice-to": "hsla(184, 95%, 92%, 20%)",
        "red": "#ef4444",
      }
    },
  },
  plugins: [],
}

