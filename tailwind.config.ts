import type { Config } from "tailwindcss";

export default {
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
      /* 🎨 COLORS */
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },

      /* 🧩 FONT FAMILY */
      fontFamily: {
        sans: "'Outfit', sans-serif",
      },

      /* 💫 GRADIENTS */
      backgroundImage: {
        "gradient-primary":
          "linear-gradient(90deg, #00C2A8, #4CE0CA, #00D4A4)",
        "gradient-secondary":
          "linear-gradient(90deg, rgba(0,194,168,0.3), rgba(76,224,202,0.3))",
      },

      /* 🟣 RADIUS */
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      /* ✨ ANIMATIONS */
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        // "fade-in-up": {
        //   "0%": { opacity: "0", transform: "translateY(20px)" },
        //   "100%": { opacity: "1", transform: "translateY(0)" },
        // },
        "scale-in": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        wave: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        scrollWords: {
          "0%, 20%": { transform: "translateY(0%)" },
          "25%, 45%": { transform: "translateY(-100%)" },
          "50%, 70%": { transform: "translateY(-200%)" },
          "75%, 95%": { transform: "translateY(-300%)" },
          "100%": { transform: "translateY(0%)" },
        },
        "gradient-move": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "fade-bubble": {
    "0%, 100%": { opacity: "0", transform: "translateY(10px)" },
    "20%, 80%": { opacity: "0.7", transform: "translateY(0)" },
  },
  "float-slow": {
    "0%, 100%": { transform: "translateY(0px)" },
    "50%": { transform: "translateY(-10px)" },
  },
  "scene-fade": {
    "0%": { opacity: "1" },
    "100%": { opacity: "0" },
  },
  "fade-in-up": {
    "0%": { opacity: "0", transform: "translateY(30px)" },
    "100%": { opacity: "1", transform: "translateY(0)" },
  },
  gridFloat: {
          "0%": { backgroundPosition: "0 0, 0 0" },
          "100%": { backgroundPosition: "100px 100px, 100px 100px" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },

      },

      /* 🎥 ANIMATION CLASSES */
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        // "fade-in-up": "fade-in-up 0.8s ease-out",
        "scale-in": "scale-in 0.4s ease-out",
        wave: "wave 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "gradient-move": "gradient-move 6s ease-in-out infinite",
        // "fade-bubble": "fade-bubble 8s ease-in-out infinite",
        "fade-bubble": "fade-bubble 9s ease-in-out infinite",
  "float-slow": "float-slow 7s ease-in-out infinite",
  "scene-fade": "scene-fade 1.8s ease-in-out forwards",
  "fade-in-up": "fade-in-up 1.5s ease-out both",
  gridFloat: "gridFloat 30s linear infinite",
  pulseGlow: "pulseGlow 6s ease-in-out infinite",

      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
