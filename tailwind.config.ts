import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        amdOrange: '#FF4A00', 
        amdSilver: '#B0B0B0', 
        amdorange: '#B0B0B2', 
        bgColor: '#000319', 
        cardColor:'#b5bdff',
      },
    },
  },
  plugins: [],
};
export default config;
