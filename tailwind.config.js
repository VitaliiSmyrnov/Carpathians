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
    ".modal-active": {
      visibility: "visible",
      opacity: 1,
      scale: 1,
    },
    ".modal-hidden": {
      visibility: "hidden",
      opacity: 0,
      scale: 0,
    },
    ".svg-32": {
      width: "32px",
      height: "32px",
    },
    ".svg-40": {
      width: "40px",
      height: "40px",
    },
    ".svg-60": {
      width: "60px",
      height: "60px",
    },
    ".bullet-12": {
      "line-height": "1.0",
    },
    ".bullet-16": {
      "--swiper-pagination-bullet-size": "16px",
    },
    ".bullet-b40": {
      "--swiper-pagination-bottom": "40px",
    },
    ".top-animation.element-show, .bottom-animation.element-show": {
      opacity: 1,
      transition: "all 1.2s",
      transform: "translateY(0%)",
    },
    ".left-animation.element-show, .right-animation.element-show": {
      opacity: 1,
      transition: "all 1.2s",
      transform: "translateX(0%)",
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
        "md-img": "400px",
        "lg-img": "800px",
        "xl-img": "1600px",
        "xxl-img": "2000px",
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
        48: ["48px", { lineHeight: "58px" }],
        52: ["52px", { lineHeight: "63px" }],
        60: ["60px", { lineHeight: "73px" }],
        68: ["68px", { lineHeight: "83px" }],
        88: ["88px", { lineHeight: "107px" }],
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
        "hero-desk-1920-3x":
          "url('./images/desktop-opt/hero_desktop-1920-min@3x.jpg'), var(--bg-gradient)",
        "advantages-mob":
          "url('./images/mobile/Advantages_mob-min.jpg'), var(--bg-gradient)",
        "advantages-mob2x":
          "url('./images/mobile/Advantages_mob-min@2x.jpg'), var(--bg-gradient)",
        "advantages-tab-1":
          "url('./images/tablet-opt/advantages_tablet-1-min.jpg'), var(--bg-gradient)",
        "advantages-tab2x-1":
          "url('./images/tablet-opt/advantages_tablet-1-min@2x.jpg'), var(--bg-gradient)",
        "advantages-tab-2":
          "url('./images/tablet-opt/advantages_tablet-2-min.jpg'), var(--bg-gradient)",
        "advantages-tab2x-2":
          "url('./images/tablet-opt/advantages_tablet-2-min@2x.jpg'), var(--bg-gradient)",
        "advantages-desk-1":
          "url('./images/desktop-opt/advantages_desktop-1-min.jpg'), var(--bg-gradient)",
        "advantages-desk2x-1":
          "url('./images/desktop-opt/advantages_desktop-1-min@2x.jpg'), var(--bg-gradient)",
        "advantages-desk-2":
          "url('./images/desktop-opt/advantages_desktop-2-min.jpg'), var(--bg-gradient)",
        "advantages-desk2x-2":
          "url('./images/desktop-opt/advantages_desktop-2-min@2x.jpg'), var(--bg-gradient)",
        "advantages-desk-3":
          "url('./images/desktop-opt/advantages_desktop-3-min.jpg'), var(--bg-gradient)",
        "advantages-desk2x-3":
          "url('./images/desktop-opt/advantages_desktop-3-min@2x.jpg'), var(--bg-gradient)",
        "review-mob":
          "url('./images/mobile/Review_mob-min.jpg'), var(--bg-gradient)",
        "review-mob2x":
          "url('./images/mobile/Review_mob-min@2x.jpg'), var(--bg-gradient)",
        "review-tab":
          "url('./images/tablet-opt/review_tablet-min.jpg'), var(--bg-gradient)",
        "review-tab2x":
          "url('./images/tablet-opt/review_tablet-min@2x.jpg'), var(--bg-gradient)",
        "review-desk":
          "url('./images/desktop-opt/review_desktop-min.jpg'), var(--bg-gradient)",
        "review-desk2x":
          "url('./images/desktop-opt/review_desktop-min@2x.jpg'), var(--bg-gradient)",
        "question-mob":
          "url('./images/mobile/question_mob-min.jpg'), var(--bg-gradient)",
        "question-mob2x":
          "url('./images/mobile/question_mob-min@2x.jpg'), var(--bg-gradient)",
        "question-tab":
          "url('./images/tablet-opt/question_tablet-min.jpg'), var(--bg-gradient)",
        "question-tab2x":
          "url('./images/tablet-opt/question_tablet-min@2x.jpg'), var(--bg-gradient)",
        "question-desk-1440":
          "url('./images/desktop-opt/question_desktop-1440-min.jpg'), var(--bg-gradient)",
        "question-desk-1440-2x":
          "url('./images/desktop-opt/question_desktop-1440-min@2x.jpg'), var(--bg-gradient)",
        "question-desk-1920":
          "url('./images/desktop-opt/question_desktop-1920-min.jpg'), var(--bg-gradient)",
        "question-desk-1920-2x":
          "url('./images/desktop-opt/question_desktop-1920-min@2x.jpg'), var(--bg-gradient)",
        "tour-detail-hoverla-mob-1":
          "url('./images/mobile/tour-hoverla-detail-1-min.jpg'), var(--bg-gradient)",
        "tour-detail-hoverla-mob2x-1":
          "url('./images/mobile/tour-hoverla-detail-1-min@2x.jpg'), var(--bg-gradient)",
        "tour-detail-hoverla-tab-1":
          "url('./images/tablet-opt/tour-hoverla-detail-tablet-1-min.jpg'), var(--bg-gradient)",
        "tour-detail-hoverla-tab2x-1":
          "url('./images/tablet-opt/tour-hoverla-detail-tablet-1-min@2x.jpg'), var(--bg-gradient)",
        "tour-detail-hoverla-desk-1":
          "url('./images/desktop-opt/tour-hoverla-detail-desktop-1-min.jpg'), var(--bg-gradient)",
        "tour-detail-hoverla-desk2x-1":
          "url('./images/desktop-opt/tour-hoverla-detail-desktop-1-min@2x.jpg'), var(--bg-gradient)",
        "tour-detail-hoverla-mob-2":
          "url('./images/mobile/tour-hoverla-detail-2-min.jpg'), var(--bg-gradient)",
        "tour-detail-hoverla-mob2x-2":
          "url('./images/mobile/tour-hoverla-detail-2-min@2x.jpg'), var(--bg-gradient)",
        "tour-detail-hoverla-tab-2":
          "url('./images/tablet-opt/tour-hoverla-detail-tablet-2-min.jpg'), var(--bg-gradient)",
        "tour-detail-hoverla-tab2x-2":
          "url('./images/tablet-opt/tour-hoverla-detail-tablet-2-min@2x.jpg'), var(--bg-gradient)",
        "tour-detail-hoverla-desk-2":
          "url('./images/desktop-opt/tour-hoverla-detail-desktop-2-min.jpg'), var(--bg-gradient)",
        "tour-detail-hoverla-desk2x-2":
          "url('./images/desktop-opt/tour-hoverla-detail-desktop-2-min@2x.jpg'), var(--bg-gradient)",
        "tour-detail-hoverla-mob-3":
          "url('./images/mobile/tour-hoverla-detail-3-min.jpg'), var(--bg-gradient)",
        "tour-detail-hoverla-mob2x-3":
          "url('./images/mobile/tour-hoverla-detail-3-min@2x.jpg'), var(--bg-gradient)",
        "tour-detail-hoverla-tab-3":
          "url('./images/tablet-opt/tour-hoverla-detail-tablet-3-min.jpg'), var(--bg-gradient)",
        "tour-detail-hoverla-tab2x-3":
          "url('./images/tablet-opt/tour-hoverla-detail-tablet-3-min@2x.jpg'), var(--bg-gradient)",
        "tour-detail-hoverla-desk-3":
          "url('./images/desktop-opt/tour-hoverla-detail-desktop-3-min.jpg'), var(--bg-gradient)",
        "tour-detail-hoverla-desk2x-3":
          "url('./images/desktop-opt/tour-hoverla-detail-desktop-3-min@2x.jpg'), var(--bg-gradient)",
        "tour-detail-bukovel-mob-1":
          "url('./images/mobile/tour-bukovel-detail-1-min.jpg'), var(--bg-gradient)",
        "tour-detail-bukovel-mob2x-1":
          "url('./images/mobile/tour-bukovel-detail-1-min@2x.jpg'), var(--bg-gradient)",
        "tour-detail-bukovel-tab-1":
          "url('./images/tablet-opt/tour-bukovel-detail-tablet-1-min.jpg'), var(--bg-gradient)",
        "tour-detail-bukovel-tab2x-1":
          "url('./images/tablet-opt/tour-bukovel-detail-tablet-1-min@2x.jpg'), var(--bg-gradient)",
        "tour-detail-bukovel-desk-1":
          "url('./images/desktop-opt/tour-bukovel-detail-desktop-1-min.jpg'), var(--bg-gradient)",
        "tour-detail-bukovel-desk2x-1":
          "url('./images/desktop-opt/tour-bukovel-detail-desktop-1-min@2x.jpg'), var(--bg-gradient)",
        "tour-detail-bukovel-mob-2":
          "url('./images/mobile/tour-bukovel-detail-2-min.jpg'), var(--bg-gradient)",
        "tour-detail-bukovel-mob2x-2":
          "url('./images/mobile/tour-bukovel-detail-2-min@2x.jpg'), var(--bg-gradient)",
        "tour-detail-bukovel-tab-2":
          "url('./images/tablet-opt/tour-bukovel-detail-tablet-2-min.jpg'), var(--bg-gradient)",
        "tour-detail-bukovel-tab2x-2":
          "url('./images/tablet-opt/tour-bukovel-detail-tablet-2-min@2x.jpg'), var(--bg-gradient)",
        "tour-detail-bukovel-desk-2":
          "url('./images/desktop-opt/tour-bukovel-detail-desktop-2-min.jpg'), var(--bg-gradient)",
        "tour-detail-bukovel-desk2x-2":
          "url('./images/desktop-opt/tour-bukovel-detail-desktop-2-min@2x.jpg'), var(--bg-gradient)",
        "tour-detail-bukovel-mob-3":
          "url('./images/mobile/tour-bukovel-detail-3-min.jpg'), var(--bg-gradient)",
        "tour-detail-bukovel-mob2x-3":
          "url('./images/mobile/tour-bukovel-detail-3-min@2x.jpg'), var(--bg-gradient)",
        "tour-detail-bukovel-tab-3":
          "url('./images/tablet-opt/tour-bukovel-detail-tablet-3-min.jpg'), var(--bg-gradient)",
        "tour-detail-bukovel-tab2x-3":
          "url('./images/tablet-opt/tour-bukovel-detail-tablet-3-min@2x.jpg'), var(--bg-gradient)",
        "tour-detail-bukovel-desk-3":
          "url('./images/desktop-opt/tour-bukovel-detail-desktop-3-min.jpg'), var(--bg-gradient)",
        "tour-detail-bukovel-desk2x-3":
          "url('./images/desktop-opt/tour-bukovel-detail-desktop-3-min@2x.jpg'), var(--bg-gradient)",
        "tour-detail-bukovel-mob-4":
          "url('./images/mobile/tour-bukovel-detail-4-min.jpg'), var(--bg-gradient)",
        "tour-detail-bukovel-mob2x-4":
          "url('./images/mobile/tour-bukovel-detail-4-min@2x.jpg'), var(--bg-gradient)",
        "tour-detail-bukovel-tab-4":
          "url('./images/tablet-opt/tour-bukovel-detail-tablet-4-min.jpg'), var(--bg-gradient)",
        "tour-detail-bukovel-tab2x-4":
          "url('./images/tablet-opt/tour-bukovel-detail-tablet-4-min@2x.jpg'), var(--bg-gradient)",
        "tour-detail-bukovel-desk-4":
          "url('./images/desktop-opt/tour-bukovel-detail-desktop-4-min.jpg'), var(--bg-gradient)",
        "tour-detail-bukovel-desk2x-4":
          "url('./images/desktop-opt/tour-bukovel-detail-desktop-4-min@2x.jpg'), var(--bg-gradient)",
        "tour-detail-carpathians-mob-1":
          "url('./images/mobile/tour-carpathians-detail-1-min.jpg'), var(--bg-gradient)",
        "tour-detail-carpathians-mob2x-1":
          "url('./images/mobile/tour-carpathians-detail-1-min@2x.jpg'), var(--bg-gradient)",
        "tour-detail-carpathians-tab-1":
          "url('./images/tablet-opt/tour-carpathians-detail-tablet-1-min.jpg'), var(--bg-gradient)",
        "tour-detail-carpathians-tab2x-1":
          "url('./images/tablet-opt/tour-carpathians-detail-tablet-1-min@2x.jpg'), var(--bg-gradient)",
        "tour-detail-carpathians-desk-1":
          "url('./images/desktop-opt/tour-carpathians-detail-desktop-1-min.jpg'), var(--bg-gradient)",
        "tour-detail-carpathians-desk2x-1":
          "url('./images/desktop-opt/tour-carpathians-detail-desktop-1-min@2x.jpg'), var(--bg-gradient)",
        "tour-detail-carpathians-mob-2":
          "url('./images/mobile/tour-carpathians-detail-2-min.jpg'), var(--bg-gradient)",
        "tour-detail-carpathians-mob2x-2":
          "url('./images/mobile/tour-carpathians-detail-2-min@2x.jpg'), var(--bg-gradient)",
        "tour-detail-carpathians-tab-2":
          "url('./images/tablet-opt/tour-carpathians-detail-tablet-2-min.jpg'), var(--bg-gradient)",
        "tour-detail-carpathians-tab2x-2":
          "url('./images/tablet-opt/tour-carpathians-detail-tablet-2-min@2x.jpg'), var(--bg-gradient)",
        "tour-detail-carpathians-desk-2":
          "url('./images/desktop-opt/tour-carpathians-detail-desktop-2-min.jpg'), var(--bg-gradient)",
        "tour-detail-carpathians-desk2x-2":
          "url('./images/desktop-opt/tour-carpathians-detail-desktop-2-min@2x.jpg'), var(--bg-gradient)",
        "tour-detail-carpathians-mob-3":
          "url('./images/mobile/tour-carpathians-detail-3-min.jpg'), var(--bg-gradient)",
        "tour-detail-carpathians-mob2x-3":
          "url('./images/mobile/tour-carpathians-detail-3-min@2x.jpg'), var(--bg-gradient)",
        "tour-detail-carpathians-tab-3":
          "url('./images/tablet-opt/tour-carpathians-detail-tablet-3-min.jpg'), var(--bg-gradient)",
        "tour-detail-carpathians-tab2x-3":
          "url('./images/tablet-opt/tour-carpathians-detail-tablet-3-min@2x.jpg'), var(--bg-gradient)",
        "tour-detail-carpathians-desk-3":
          "url('./images/desktop-opt/tour-carpathians-detail-desktop-3-min.jpg'), var(--bg-gradient)",
        "tour-detail-carpathians-desk2x-3":
          "url('./images/desktop-opt/tour-carpathians-detail-desktop-3-min@2x.jpg'), var(--bg-gradient)",
        "tour-detail-carpathians-mob-4":
          "url('./images/mobile/tour-carpathians-detail-4-min.jpg'), var(--bg-gradient)",
        "tour-detail-carpathians-mob2x-4":
          "url('./images/mobile/tour-carpathians-detail-4-min@2x.jpg'), var(--bg-gradient)",
        "tour-detail-carpathians-tab-4":
          "url('./images/tablet-opt/tour-carpathians-detail-tablet-4-min.jpg'), var(--bg-gradient)",
        "tour-detail-carpathians-tab2x-4":
          "url('./images/tablet-opt/tour-carpathians-detail-tablet-4-min@2x.jpg'), var(--bg-gradient)",
        "tour-detail-carpathians-desk-4":
          "url('./images/desktop-opt/tour-carpathians-detail-desktop-4-min.jpg'), var(--bg-gradient)",
        "tour-detail-carpathians-desk2x-4":
          "url('./images/desktop-opt/tour-carpathians-detail-desktop-4-min@2x.jpg'), var(--bg-gradient)",
        "tour-detail-carpathians-mob-5":
          "url('./images/mobile/tour-carpathians-detail-5-min.jpg'), var(--bg-gradient)",
        "tour-detail-carpathians-mob2x-5":
          "url('./images/mobile/tour-carpathians-detail-5-min@2x.jpg'), var(--bg-gradient)",
        "tour-detail-carpathians-tab-5":
          "url('./images/tablet-opt/tour-carpathians-detail-tablet-5-min.jpg'), var(--bg-gradient)",
        "tour-detail-carpathians-tab2x-5":
          "url('./images/tablet-opt/tour-carpathians-detail-tablet-5-min@2x.jpg'), var(--bg-gradient)",
        "tour-detail-carpathians-desk-5":
          "url('./images/desktop-opt/tour-carpathians-detail-desktop-5-min.jpg'), var(--bg-gradient)",
        "tour-detail-carpathians-desk2x-5":
          "url('./images/desktop-opt/tour-carpathians-detail-desktop-5-min@2x.jpg'), var(--bg-gradient)",
        "tour-detail-carpathians-mob-6":
          "url('./images/mobile/tour-carpathians-detail-6-min.jpg'), var(--bg-gradient)",
        "tour-detail-carpathians-mob2x-6":
          "url('./images/mobile/tour-carpathians-detail-6-min@2x.jpg'), var(--bg-gradient)",
        "tour-detail-carpathians-tab-6":
          "url('./images/tablet-opt/tour-carpathians-detail-tablet-6-min.jpg'), var(--bg-gradient)",
        "tour-detail-carpathians-tab2x-6":
          "url('./images/tablet-opt/tour-carpathians-detail-tablet-6-min@2x.jpg'), var(--bg-gradient)",
        "tour-detail-carpathians-desk-6":
          "url('./images/desktop-opt/tour-carpathians-detail-desktop-6-min.jpg'), var(--bg-gradient)",
        "tour-detail-carpathians-desk2x-6":
          "url('./images/desktop-opt/tour-carpathians-detail-desktop-6-min@2x.jpg'), var(--bg-gradient)",
        "tour-detail-carpathians-mob-7":
          "url('./images/mobile/tour-carpathians-detail-7-min.jpg'), var(--bg-gradient)",
        "tour-detail-carpathians-mob2x-7":
          "url('./images/mobile/tour-carpathians-detail-7-min@2x.jpg'), var(--bg-gradient)",
        "tour-detail-carpathians-tab-7":
          "url('./images/tablet-opt/tour-carpathians-detail-tablet-7-min.jpg'), var(--bg-gradient)",
        "tour-detail-carpathians-tab2x-7":
          "url('./images/tablet-opt/tour-carpathians-detail-tablet-7-min@2x.jpg'), var(--bg-gradient)",
        "tour-detail-carpathians-desk-7":
          "url('./images/desktop-opt/tour-carpathians-detail-desktop-7-min.jpg'), var(--bg-gradient)",
        "tour-detail-carpathians-desk2x-7":
          "url('./images/desktop-opt/tour-carpathians-detail-desktop-7-min@2x.jpg'), var(--bg-gradient)",
      },
    },
  },
  plugins: [Myclass],
};
