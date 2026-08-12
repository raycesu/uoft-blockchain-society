import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#f7f7f9",
        "bg-alt": "#f0eef8",
        surface: "#ffffff",
        "surface-alt": "#f7f4ff",
        "border-subtle": "#ddd6f3",
        text: "#231737",
        "text-soft": "#625579",
        accent: "#7e5bef",
        "accent-soft": "#ede7ff",
        "accent-strong": "#5f3fd5",
      },
      borderRadius: {
        lg: "20px",
        md: "14px",
        pill: "999px",
      },
      boxShadow: {
        soft: "0 22px 60px rgba(83, 61, 145, 0.12)",
        subtle: "0 12px 30px rgba(88, 69, 146, 0.1)",
        nav: "0 14px 34px rgba(58, 44, 96, 0.18), 0 3px 9px rgba(46, 35, 74, 0.11)",
        cta: "0 10px 22px rgba(93, 67, 167, 0.3)",
        "cta-hover": "0 14px 24px rgba(93, 67, 167, 0.36)",
        social: "0 8px 20px rgba(93, 67, 167, 0.16)",
        logo: "0 8px 18px rgba(93, 67, 167, 0.12)",
        carousel: "0 8px 18px rgba(93, 67, 167, 0.2)",
        "timeline-dot": "0 0 14px rgba(126, 91, 239, 0.42)",
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "system-ui", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        display: ["var(--font-fraunces)", "system-ui", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      keyframes: {
        partnersTicker: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "partners-ticker": "partnersTicker 38s linear infinite",
      },
      maxWidth: {
        container: "1120px",
        "container-wide": "1280px",
      },
    },
  },
  plugins: [],
}

export default config
