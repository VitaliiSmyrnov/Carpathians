const swiperUpcomingTours = new Swiper("#swiper-upcoming-tours", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
      centeredSlides: false,
      centeredSlidesBounds: false,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 20,
      centeredSlides: false,
      centeredSlidesBounds: false,
    },
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  navigation: {
    nextEl: ".swiper-next-1",
    prevEl: ".swiper-prev-1",
  },
  spaceBetween: 15,
  slidesPerView: "auto",
  centeredSlides: true,
  centeredSlidesBounds: true,
});

const swiperUpcomingToursDetails = new Swiper(".swiper-tour-detail", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
    breakpoints: {
      768: {
        spaceBetween: 20,
      },
    },
  },
  bulletClass: "bullet",
  spaceBetween: 30,
  slidesPerView: "auto",
  centeredSlides: true,
  centeredSlidesBounds: true,
});
