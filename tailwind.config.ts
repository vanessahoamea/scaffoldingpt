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
      }
    },
  },
  plugins: [],
}
export default config
