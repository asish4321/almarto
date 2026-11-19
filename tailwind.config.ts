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
        brand: {
          purple: {
            DEFAULT: "#35109B",
            50: "#F2EFFF",
            100: "#E3DCFF",
            200: "#C5B6FF",
            300: "#A38CFF",
            400: "#7E5CFF",
            500: "#5B2EFF",
            600: "#4419DC",
            700: "#35109B", // Official Royal Purple
            800: "#270A77",
            900: "#1A0553",
            dark: "#1A0553",
          },
          orange: {
            DEFAULT: "#FF7900",
            50: "#FFF6ED",
            100: "#FFEDD5",
            200: "#FED7AA",
            300: "#FDBA74",
            400: "#FB923C",
            500: "#FF7900", // Official Vibrant Orange
            600: "#EA580C",
            700: "#C2410C",
            800: "#9A3412",
            900: "#7C2D12",
          },
          bg: "#F7F7FB",
          text: "#19152B",
          muted: "#777487",
          border: "#E7E5F0",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 2px 8px -2px rgba(25, 21, 43, 0.06), 0 1px 4px -1px rgba(25, 21, 43, 0.04)",
        "card-hover": "0 10px 25px -5px rgba(53, 16, 155, 0.1), 0 8px 10px -6px rgba(53, 16, 155, 0.06)",
        header: "0 2px 10px 0 rgba(25, 21, 43, 0.05)",
      },
    },
  },
  plugins: [],
};
export default config;
