import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts,tsx,js,jsx,svelte}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
};
