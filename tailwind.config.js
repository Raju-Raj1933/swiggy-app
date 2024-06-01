/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        xss: "430px",
        xs: "540px",
        sm: "768px",
        custom: "992px",
      },
    },
  },
  plugins: [],
};
