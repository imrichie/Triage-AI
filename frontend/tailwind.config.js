/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Brand Colors
        primary: {
          DEFAULT: "#2563EB", // Blue
          light: "#60A5FA",
          dark: "#1E40AF",
        },
        // Triage Level Colors
        triage: {
          level1: "#DC2626", // Red - Emergency
          level2: "#EA580C", // Orange - Urgent
          level3: "#F59E0B", // Yellow - Less Urgent
          level4: "#10B981", // Green - Non-Urgent
          level5: "#3B82F6", // Blue - Informational
        },
        // Semantic Colors
        success: "#10B981",
        warning: "#F59E0B",
        error: "#DC2626",
        info: "#3B82F6",
        // Neutral/Surface Colors
        surface: {
          DEFAULT: "#F8F9FA",
          card: "#FFFFFF",
          border: "#E5E7EB",
        },
      },
    },
  },
  plugins: [],
};
