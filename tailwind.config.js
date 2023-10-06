/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".rotate-y-0": {
      transform: "rotateY(0deg)",
    },
    ".is-flipped": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
    ".backdrop-active": {
      visibility: "visible",
      opacity: 1,
    },
    ".backdrop-hidden": {
      visibility: "hidden",
      opacity: 0,
    },
  });
});

module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      screens: {
        md: "768px",
        lg: "1440px",
        xl: "1920px",
      },
      fontFamily: {
        main: ["Montserrat", "sans-serif"],
        secondary: ["Manrope", "sans-serif"],
      },
      colors: {
        primary: "#1B1D1B",
        secondary: "#202321",
        accent: "#5B86A1",
        light: "#F7FBFB",
        grey: "#A3A5A3",
        backdrop: "rgba(0, 0, 0, 0.2)",
        dark_70: "rgba(32, 35, 33, 0.70)",
      },
      dropShadow: {
        text: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
      backgroundImage: {
        "hero-mob":
          "url('./images/mobile/hero_mob-min.jpg'), linear-gradient(to top right, #475569, #64748b, #94a3b8)",
        "advantages-mob":
          "url('./images/mobile/advantages_mob-min.jpg'), linear-gradient(to top right, #475569, #64748b, #94a3b8)",
        "review-mob":
          "url('./images/mobile/Review_mob-min.jpg'), linear-gradient(to top right, #475569, #64748b, #94a3b8)",
        "question-mob":
          "url('./images/mobile/question_mob-min.jpg'), linear-gradient(to top right, #475569, #64748b, #94a3b8)",
        "tour-detail-hoverla-mob-1":
          "url('./images/mobile/tour-hoverla-detail-1-min.jpg'), linear-gradient(to top right, #475569, #64748b, #94a3b8)",
        "tour-detail-hoverla-mob-2":
          "url('./images/mobile/tour-hoverla-detail-2-min.jpg'), linear-gradient(to top right, #475569, #64748b, #94a3b8)",
        "tour-detail-hoverla-mob-3":
          "url('./images/mobile/tour-hoverla-detail-3-min.jpg'), linear-gradient(to top right, #475569, #64748b, #94a3b8)",
        "tour-detail-bukovel-mob-1":
          "url('./images/mobile/tour-bukovel-detail-1-min.jpg'), linear-gradient(to top right, #475569, #64748b, #94a3b8)",
        "tour-detail-bukovel-mob-2":
          "url('./images/mobile/tour-bukovel-detail-2-min.jpg'), linear-gradient(to top right, #475569, #64748b, #94a3b8)",
        "tour-detail-bukovel-mob-3":
          "url('./images/mobile/tour-bukovel-detail-3-min.jpg'), linear-gradient(to top right, #475569, #64748b, #94a3b8)",
        "tour-detail-bukovel-mob-4":
          "url('./images/mobile/tour-bukovel-detail-4-min.jpg'), linear-gradient(to top right, #475569, #64748b, #94a3b8)",
        "tour-detail-carpathians-mob-1":
          "url('./images/mobile/tour-carpathians-detail-1-min.jpg'), linear-gradient(to top right, #475569, #64748b, #94a3b8)",
        "tour-detail-carpathians-mob-2":
          "url('./images/mobile/tour-carpathians-detail-2-min.jpg'), linear-gradient(to top right, #475569, #64748b, #94a3b8)",
        "tour-detail-carpathians-mob-3":
          "url('./images/mobile/tour-carpathians-detail-3-min.jpg'), linear-gradient(to top right, #475569, #64748b, #94a3b8)",
        "tour-detail-carpathians-mob-4":
          "url('./images/mobile/tour-carpathians-detail-4-min.jpg'), linear-gradient(to top right, #475569, #64748b, #94a3b8)",
        "tour-detail-carpathians-mob-5":
          "url('./images/mobile/tour-carpathians-detail-5-min.jpg'), linear-gradient(to top right, #475569, #64748b, #94a3b8)",
        "tour-detail-carpathians-mob-6":
          "url('./images/mobile/tour-carpathians-detail-6-min.jpg'), linear-gradient(to top right, #475569, #64748b, #94a3b8)",
        "tour-detail-carpathians-mob-7":
          "url('./images/mobile/tour-carpathians-detail-7-min.jpg'), linear-gradient(to top right, #475569, #64748b, #94a3b8)",
      },
      fontSize: {
        14: ["14px", { lineHeight: "17px" }],
        16: ["16px", { lineHeight: "20px" }],
        "16l": ["16px", { lineHeight: "22px" }],
        18: ["18px", { lineHeight: "22px" }],
        20: ["20px", { lineHeight: "24px" }],
        24: ["24px", { lineHeight: "29px" }],
        28: ["28px", { lineHeight: "34px" }],
        32: ["32px", { lineHeight: "39px" }],
        40: ["40px", { lineHeight: "49px" }],
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
        "7xl": ["4.5rem", { lineHeight: "1" }],
        "8xl": ["6rem", { lineHeight: "1" }],
        "9xl": ["8rem", { lineHeight: "1" }],
      },
      lineHeight: {
        225: "1.225",
        25: "1.25",
        375: "1.375",
        none: "1",
        tight: "1.25",
        snug: "1.375",
        normal: "1.5",
        relaxed: "1.625",
        loose: "2",
        3: ".75rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.25rem",
        10: "2.5rem",
      },
      spacing: {
        "10px": "10px",
        "52px": "52px",
        "60px": "60px",
        "88px": "88px",
        "108px": "108px",
        "285px": "285px",
        "311px": "311px",
        "315px": "315px",
        px: "1px",
        0: "0px",
        0.5: "0.125rem",
        1: "0.25rem",
        1.5: "0.375rem",
        2: "0.5rem",
        2.5: "0.625rem",
        3: "0.75rem",
        3.5: "0.875rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.25rem",
        10: "2.5rem",
        11: "2.75rem",
        12: "3rem",
        14: "3.5rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        28: "7rem",
        32: "8rem",
        36: "9rem",
        40: "10rem",
        44: "11rem",
        48: "12rem",
        52: "13rem",
        56: "14rem",
        60: "15rem",
        64: "16rem",
        72: "18rem",
        80: "20rem",
        96: "24rem",
      },
    },
  },
  plugins: [Myclass],
};
