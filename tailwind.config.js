/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
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
      fontFamily: {
        sans: ["var(--font-plain)"],
        helveticaNowDisplay: ["var(--font-helvetica-now-display)"],
      },
      fontSize: {
        "2xs": "10px",
      },
      colors: {
        pCustom: "#7B68EE",
        mainFont: "#283036",
        Font_SubColor_1: "#AAB6BF",
        Sub_Dark_color: "#657786",
        SubDark_Color_3: "#E1E8ED",
        Subtle_dark: "#F3F6F8",
        action1: "#F37023",
        action1_bg: "#FFE3D6",
        action2: "#FFC20E",
        action3: "#CB8C47",
        action4: "#EB5757",
        Blue_Main_Official_1: "#0091CD",
        Blue_Main_Official_2: "#1C9DD3",
        Blue_Main_Official_3: "#39A9D8",
        Blue_Main_Official_4: "#55B6DE",
        blue_misc: "#007AFF",
        Subtle_dark_2: "#EDF1F4",
        good_Green: "#279B37",
        medium_green: "#7AC143",
        blue_line1: "#AADAEE",
        blue_line2: "#E3F3F9",
        gradient_1: "linear-gradient(to right, #821ED9 0%, #5986E7 100%)",
        new_dark_1: "#201852",
        action_ll1: "#7B68EE",
        action_ll2: "#FD71AF",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      screens: {
        s1100: "1100px",
        s1200: "1200px",
        "mobile-s": "320px",
        "mobile-m": "375px",
        "mobile-l": "425px",
        tablet: "768px",
        "1440px": "1440px",
        "2xl": "1440px",
      },
      minWidth: {
        "mobile-l": "425px",
        "mobile-m": "375px",
        "mobile-s": "320px",
      },
      backgroundImage: {
        "gradient-blue-main": "linear-gradient(90deg, #0091CD, #0087BF)",
        "gradient-pink-main": "linear-gradient(90deg, #FD71AF, #E14D8F)",
        grad_3:
          "linear-gradient(90deg, #7C40DC -26.56%, #6A3CCE 44.76%, #51279A 100%)",
        "gradient-slider": "linear-gradient(90deg, #FFC20E, #F37023)",
      },
      boxShadow: {
        tipsterCard: "0 50px 65px -30px #821ED9",
      },
    },
  },
  variants: {
    extend: {
      listStyleType: ["marker"],
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    /** @type {import('tailwindcss/types/config').PluginCreator} */
    ({ addUtilities }) => {
      addUtilities({
        // Add app prefix to avoid conflict with tailwind-merge
        ".app-text-h1": {
          fontSize: "48px",
          fontWeight: 800,
          fontFamily: "var(--font-helvetica-now-display)",
        },
        ".app-text-h2": {
          fontSize: "36px",
          fontWeight: 800,
          fontFamily: "var(--font-helvetica-now-display)",
        },
        ".app-text-h3": {
          fontSize: "24px",
          fontWeight: 800,
          fontFamily: "var(--font-helvetica-now-display)",
        },
        ".app-text-h4": {
          fontSize: "20px",
          fontWeight: 800,
          fontFamily: "var(--font-helvetica-now-display)",
        },
        ".app-text-h6": {
          fontSize: "15px",
          fontWeight: 700,
          fontFamily: "var(--font-helvetica-now-display)",
        },
        ".app-text-body": {
          fontSize: "16px",
        },
        ".app-text-body-medium": {
          fontSize: "14px",
        },
        ".app-text-body-paragraph": {
          fontSize: "16px",
        },
        ".app-text-body-small": {
          fontSize: "13px",
        },
        ".app-text-body-verysmall": {
          fontSize: "10px",
        },
        ".app-text-caption": {
          fontSize: "14px",
          fontWeight: 300,
        },
        ".app-text-category": {
          fontSize: "12px",
        },
        ".app-text-small-caption": {
          fontSize: "12px",
          fontWeight: 300,
        },
        ".no-scrollbar": {
          /* IE and Edge */
          "-ms-overflow-style": "none",

          /* Firefox */
          "scrollbar-width": "none",

          /* Safari and Chrome */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      });
    },
  ],
};
