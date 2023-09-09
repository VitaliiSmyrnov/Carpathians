const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,

  // Navigation arrows
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
  spaceBetween: 20,
  // slidesPerView: 1.2,
  slidesPerView: "auto",
  // slidesPerGroup: 1,
  centeredSlides: true,
  centeredSlidesBounds: true,
  // centerInsufficientSlides: true,
});
