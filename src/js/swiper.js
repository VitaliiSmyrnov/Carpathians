const swiperUpcomingTours = new Swiper("#swiper-upcoming-tours", {
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

const swiperTourDetails = new Swiper(".swiper-tour-detail", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    // bulletClass: "bg-amber-400",
    // bulletActiveClass: "bg-green-400",
  },
  spaceBetween: 23,
  slidesPerView: "auto",
  centeredSlides: true,
  centeredSlidesBounds: true,
});

const swiper2 = new Swiper("#swiper-container-2", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  navigation: {
    nextEl: ".swiper-next-2",
    prevEl: ".swiper-prev-2",
  },
  spaceBetween: 20,
  slidesPerView: "auto",
  centeredSlides: true,
  centeredSlidesBounds: true,
});
