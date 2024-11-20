/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      maxWidth: {
        "w-720": "720px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
