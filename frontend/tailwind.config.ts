import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563EB",
          light: "#60A5FA",
          dark: "#1E40AF",
        },
        triage: {
          level1: "#DC2626",
          level2: "#EA580C",
          level3: "#F59E0B",
          level4: "#10B981",
          level5: "#3B82F6",
        },
        success: "#10B981",
        warning: "#F59E0B",
        error: "#DC2626",
        info: "#3B82F6",
        surface: {
          DEFAULT: "#F8F9FA",
          card: "#FFFFFF",
          border: "#E5E7EB",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
