/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  important: true,
  theme: {
    extend: {
      colors: {
        earth: {
          50: "#F6F2E7",
          100: "#EBE3CC",
          200: "#DACDB3",
          300: "#928976",
          400: "#B1A893",
          500: "#675744",
        },
        theme: "#D9B46F",
      },
    },
  },
  plugins: [],
};
