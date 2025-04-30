import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        bounceCustom: {
          "0%, 20%, 50%, 80%, 100%": { transform: "translateY(0)" },
          "40%": { transform: "translateY(-4px)" },
          "60%": { transform: "translateY(-1px)" },
        },
        rotateCustom: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        loader: {
          "15%": { borderBottomRightRadius: "15px" },
          "25%": { transform: "translateY(6px) rotate(22.5deg)" },
          "50%": { transform: "translateY(12px) scale(1,.9) rotate(45deg)" },
          "75%": { transform: "translateY(6px) rotate(67.5deg)" },
          "100%": { transform: "translateY(0) rotate(90deg)" },
        },
        loaderBG: {
          "0%": { transform: "rotate(0deg) rotate(0)" },
          "15%": {
            borderBottomRightRadius: "15px",
            transform: "rotate(72deg)",
          },
          "25%": { transform: "translateY(6px) rotate(144deg)" },
          "50%": { transform: "translateY(12px) rotate(216deg)" },
          "75%": { transform: "translateY(6px) rotate(288deg)" },
          "100%": { transform: "translateY(0) rotate(360deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        bounceSlow: "bounceCustom 2s ease infinite",
        bounceMedium: "bounceCustom 1.5s ease infinite",
        bounceFast: "bounceCustom 1s ease infinite",
        rotateSlow: "rotateCustom 10s linear infinite",
        rotateMedium: "rotateCustom 5s linear infinite",
        rotateFast: "rotateCustom 2s linear infinite",
        "loader-bounce": "loader 0.5s linear infinite",
        "bg-bounce-loader": "loaderBG 2s linear infinite",
      },
    },
  },
  plugins: [animate, require("@tailwindcss/nesting")],
} satisfies Config;

export default config;
