import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0170b9"
      },
      brightness: {
        45: ".45"
      },
      borderWidth: {
        "hr": "1.5px"
      },
      screens: {
        "xs": "320px"
      },
      gridTemplateColumns: {
        "expand-right": "minmax(200px, 400px) auto",
        "expand-left": "auto minmax(200px, 400px)"
      }
    },
  },
  plugins: [],
}
export default config
