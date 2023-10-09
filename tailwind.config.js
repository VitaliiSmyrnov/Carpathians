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
    ".svg-40": {
      width: "40px",
      height: "40px",
    },
    ".svg-60": {
      width: "60px",
      height: "60px",
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
        dpr: {
          raw: "screen and (min-device-pixel-ratio: 2), screen and (min-resolution: 192dpi), screen and (min-resolution: 2dppx)",
        },
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
        68: ["68px", { lineHeight: "83px" }],
      },
      backgroundImage: {
        "hero-mob":
          "url('./images/mobile/hero_mob-min.jpg'), var(--bg-gradient)",
        "hero-mob2x":
          "url('./images/mobile/hero_mob-min@2x.jpg'), var(--bg-gradient)",
        "hero-tab":
          "url('./images/tablet-opt/hero_tablet-min.jpg'), var(--bg-gradient)",
        "hero-tab2x":
          "url('./images/tablet-opt/hero_tablet-min@2x.jpg'), var(--bg-gradient)",
        "hero-desk-1440":
          "url('./images/desktop-opt/hero_desktop-1440-min.jpg'), var(--bg-gradient)",
        "hero-desk-1440-2x":
          "url('./images/desktop-opt/hero_desktop-1440-min@2x.jpg'), var(--bg-gradient)",
        "hero-desk-1920":
          "url('./images/desktop-opt/hero_desktop-1920-min.jpg'), var(--bg-gradient)",
        "hero-desk-1920-2x":
          "url('./images/desktop-opt/hero_desktop-1920-min@2x.jpg'), var(--bg-gradient)",
        "advantages-mob":
          "url('./images/mobile/advantages_mob-min.jpg'), var(--bg-gradient)",
        "advantages-mob2x":
          "url('./images/mobile/advantages_mob-min@2x.jpg'), var(--bg-gradient)",
        "review-mob":
          "url('./images/mobile/Review_mob-min.jpg'), var(--bg-gradient)",
        "review-mob2x":
          "url('./images/mobile/Review_mob-min@2x.jpg'), var(--bg-gradient)",
        "question-mob":
          "url('./images/mobile/question_mob-min.jpg'), var(--bg-gradient)",
        "question-mob2x":
          "url('./images/mobile/question_mob-min@2x.jpg'), var(--bg-gradient)",
        "tour-detail-hoverla-mob-1":
          "url('./images/mobile/tour-hoverla-detail-1-min.jpg'), var(--bg-gradient)",
        "tour-detail-hoverla-mob2x-1":
          "url('./images/mobile/tour-hoverla-detail-1-min@2x.jpg'), var(--bg-gradient)",
        "tour-detail-hoverla-mob-2":
          "url('./images/mobile/tour-hoverla-detail-2-min.jpg'), var(--bg-gradient)",
        "tour-detail-hoverla-mob2x-2":
          "url('./images/mobile/tour-hoverla-detail-2-min@2x.jpg'), var(--bg-gradient)",
        "tour-detail-hoverla-mob-3":
          "url('./images/mobile/tour-hoverla-detail-3-min.jpg'), var(--bg-gradient)",
        "tour-detail-hoverla-mob2x-3":
          "url('./images/mobile/tour-hoverla-detail-3-min@2x.jpg'), var(--bg-gradient)",
        "tour-detail-bukovel-mob-1":
          "url('./images/mobile/tour-bukovel-detail-1-min.jpg'), var(--bg-gradient)",
        "tour-detail-bukovel-mob2x-1":
          "url('./images/mobile/tour-bukovel-detail-1-min@2x.jpg'), var(--bg-gradient)",
        "tour-detail-bukovel-mob-2":
          "url('./images/mobile/tour-bukovel-detail-2-min.jpg'), var(--bg-gradient)",
        "tour-detail-bukovel-mob2x-2":
          "url('./images/mobile/tour-bukovel-detail-2-min@2x.jpg'), var(--bg-gradient)",
        "tour-detail-bukovel-mob-3":
          "url('./images/mobile/tour-bukovel-detail-3-min.jpg'), var(--bg-gradient)",
        "tour-detail-bukovel-mob2x-3":
          "url('./images/mobile/tour-bukovel-detail-3-min@2x.jpg'), var(--bg-gradient)",
        "tour-detail-bukovel-mob-4":
          "url('./images/mobile/tour-bukovel-detail-4-min.jpg'), var(--bg-gradient)",
        "tour-detail-bukovel-mob2x-4":
          "url('./images/mobile/tour-bukovel-detail-4-min@2x.jpg'), var(--bg-gradient)",
        "tour-detail-carpathians-mob-1":
          "url('./images/mobile/tour-carpathians-detail-1-min.jpg'), var(--bg-gradient)",
        "tour-detail-carpathians-mob2x-1":
          "url('./images/mobile/tour-carpathians-detail-1-min@2x.jpg'), var(--bg-gradient)",
        "tour-detail-carpathians-mob-2":
          "url('./images/mobile/tour-carpathians-detail-2-min.jpg'), var(--bg-gradient)",
        "tour-detail-carpathians-mob2x-2":
          "url('./images/mobile/tour-carpathians-detail-2-min@2x.jpg'), var(--bg-gradient)",
        "tour-detail-carpathians-mob-3":
          "url('./images/mobile/tour-carpathians-detail-3-min.jpg'), var(--bg-gradient)",
        "tour-detail-carpathians-mob2x-3":
          "url('./images/mobile/tour-carpathians-detail-3-min@2x.jpg'), var(--bg-gradient)",
        "tour-detail-carpathians-mob-4":
          "url('./images/mobile/tour-carpathians-detail-4-min.jpg'), var(--bg-gradient)",
        "tour-detail-carpathians-mob2x-4":
          "url('./images/mobile/tour-carpathians-detail-4-min@2x.jpg'), var(--bg-gradient)",
        "tour-detail-carpathians-mob-5":
          "url('./images/mobile/tour-carpathians-detail-5-min.jpg'), var(--bg-gradient)",
        "tour-detail-carpathians-mob2x-5":
          "url('./images/mobile/tour-carpathians-detail-5-min@2x.jpg'), var(--bg-gradient)",
        "tour-detail-carpathians-mob-6":
          "url('./images/mobile/tour-carpathians-detail-6-min.jpg'), var(--bg-gradient)",
        "tour-detail-carpathians-mob2x-6":
          "url('./images/mobile/tour-carpathians-detail-6-min@2x.jpg'), var(--bg-gradient)",
        "tour-detail-carpathians-mob-7":
          "url('./images/mobile/tour-carpathians-detail-7-min.jpg'), var(--bg-gradient)",
        "tour-detail-carpathians-mob2x-7":
          "url('./images/mobile/tour-carpathians-detail-7-min@2x.jpg'), var(--bg-gradient)",
      },
    },
  },
  plugins: [Myclass],
};
