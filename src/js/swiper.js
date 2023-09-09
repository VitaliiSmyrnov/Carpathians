const swiper1 = new Swiper("#swiper-container-1", {
  // Optional parameters
  direction: "horizontal",
  loop: false,

  // Navigation arrows
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  navigation: {
    nextEl: ".swiper-next-1",
    prevEl: ".swiper-prev-1",
  },
  spaceBetween: 15,
  // slidesPerView: 1.2,
  slidesPerView: "auto",
  // slidesPerGroup: 1,
  centeredSlides: true,
  centeredSlidesBounds: true,
  // centerInsufficientSlides: true,
  initialSlide: 2,
});

const swiper2 = new Swiper("#swiper-container-2", {
  // Optional parameters
  direction: "horizontal",
  loop: false,

  // Navigation arrows
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  navigation: {
    nextEl: ".swiper-next-2",
    prevEl: ".swiper-prev-2",
  },
  spaceBetween: 20,
  // slidesPerView: 1.2,
  slidesPerView: "auto",
  // slidesPerGroup: 1,
  centeredSlides: true,
  centeredSlidesBounds: true,
  // centerInsufficientSlides: true,
});
