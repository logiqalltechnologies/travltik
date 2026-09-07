import tailwindcssAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}",
    "./components/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}",
  ],
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
          container: "hsl(var(--primary-container))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        tertiary: {
          DEFAULT: "hsl(var(--tertiary))",
          foreground: "hsl(var(--tertiary-foreground))",
          container: "hsl(var(--tertiary-container))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        error: {
          DEFAULT: "hsl(var(--error))",
          container: "hsl(var(--error-container))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        surface: {
          DEFAULT: "hsl(var(--surface))",
          container: "hsl(var(--surface-container))",
          "container-low": "hsl(var(--surface-container-low))",
          "container-lowest": "hsl(var(--surface-container-lowest))",
          "container-high": "hsl(var(--surface-container-high))",
          "container-highest": "hsl(var(--surface-container-highest))",
        },
        "on-surface": {
          DEFAULT: "hsl(var(--on-surface))",
          variant: "hsl(var(--on-surface-variant))",
        },
        outline: {
          DEFAULT: "hsl(var(--outline))",
          variant: "hsl(var(--outline-variant))",
        },
        // Trawell IQ Brand System Colors (Purple + Persian Green + White)
        navy: "#0C1A2E",
        ink: "#1A3347",
        hint: "#8FAEC4",
        purple: {
          DEFAULT: "#481268",
          dark: "#340A4D",
          light: "#5B1983",
          accent: "#6B1D9B",
          soft: "#F5EEFA",
        },
        teal: {
          DEFAULT: "#0f172a",
          dark: "#020617",
          light: "#1e293b",
          soft: "#f8fafc",
        },
        persian: {
          DEFAULT: "#0f172a",
          dark: "#020617",
          light: "#1e293b",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["-apple-system", "BlinkMacSystemFont", "'SF Pro Text'", "'SF Pro Display'", "'Plus Jakarta Sans'", "'Inter'", "system-ui", "sans-serif"],
        heading: ["-apple-system", "BlinkMacSystemFont", "'SF Pro Display'", "'Plus Jakarta Sans'", "'Manrope'", "sans-serif"],
        display: ["-apple-system", "BlinkMacSystemFont", "'SF Pro Display'", "'Plus Jakarta Sans'", "'Manrope'", "sans-serif"],
        manrope: ["'Manrope'", "-apple-system", "sans-serif"],
        inter: ["'Inter'", "-apple-system", "sans-serif"],
        "plus-jakarta": ["'Plus Jakarta Sans'", "-apple-system", "sans-serif"],
        plusjakarta: ["'Plus Jakarta Sans'", "-apple-system", "sans-serif"],
        jakarta: ["'Plus Jakarta Sans'", "-apple-system", "sans-serif"],
        google: ["'Plus Jakarta Sans'", "-apple-system", "sans-serif"],
        montserrat: ["'Plus Jakarta Sans'", "-apple-system", "sans-serif"],
        roboto: ["'Inter'", "-apple-system", "sans-serif"],
        sora: ["'Plus Jakarta Sans'", "-apple-system", "sans-serif"],
        dmsans: ["'Plus Jakarta Sans'", "-apple-system", "sans-serif"],
        poppins: ["'Plus Jakarta Sans'", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        "apple-xs": "0 1px 2px rgba(0, 0, 0, 0.03), 0 1px 1px rgba(0, 0, 0, 0.02)",
        "apple-sm": "0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02)",
        "apple-md": "0 4px 16px -2px rgba(15, 23, 42, 0.05), 0 1px 3px rgba(0, 0, 0, 0.03)",
        "apple-lg": "0 12px 32px -4px rgba(15, 23, 42, 0.08), 0 2px 6px rgba(0, 0, 0, 0.04)",
        "apple-glass": "inset 0 1px 0 0 rgba(255, 255, 255, 0.9), 0 8px 28px -4px rgba(15, 23, 42, 0.06)",
        "editorial": "0 1px 4px rgba(0,0,0,0.06)",
        "editorial-lg": "0 4px 12px rgba(0,0,0,0.08)",
        "editorial-xl": "0 8px 30px rgba(0,0,0,0.08)",
        "card": "0 1px 3px rgba(0,0,0,0.03), 0 6px 18px -4px rgba(15,23,42,0.04)",
        "card-hover": "0 4px 20px rgba(14,165,233,.12), 0 8px 28px rgba(12,26,52,.06)",
        "premium-card": "0 1px 3px rgba(0,0,0,0.03), 0 4px 12px rgba(0,0,0,0.03)",
        "premium-card-hover": "0 16px 32px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.04)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.3s ease-out forwards",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
