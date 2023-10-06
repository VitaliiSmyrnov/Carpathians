const swiperUpcomingTours = new Swiper("#swiper-upcoming-tours", {
  // Optional parameters
  direction: "horizontal",
  loop: false,

  // Navigation arrows
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
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
    // bulletClass: "bg-amber-400",
    // bulletActiveClass: "bg-green-400",
    // renderBullet: function () {
    //   return '<span class="w-[20px] h-[20px] text-light inline-block z-20"></span>';
    // },
    // renderBullet: function () {
    //   return '<span class="bullet"></span>';
    // },
  },
  bulletClass: "bullet",
  // renderBullet: function (className) {
  //   return '<span class="' + className + '"></span>';
  // },
  spaceBetween: 23,
  slidesPerView: "auto",
  centeredSlides: true,
  centeredSlidesBounds: true,
});

const swiperGallery = new Swiper("#swiper-gallery", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  navigation: {
    nextEl: ".swiper-next-2",
    prevEl: ".swiper-prev-2",
  },
  spaceBetween: 20,
  slidesPerView: "auto",
  centeredSlides: true,
  centeredSlidesBounds: true,
});
