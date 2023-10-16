const swiperUpcomingTours = new Swiper("#swiper-upcoming-tours", {
  // Optional parameters
  direction: "horizontal",
  loop: false,

  // Navigation arrows
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
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
  // slidesPerView: 1.2,
  slidesPerView: "auto",
  // slidesPerGroup: 1,
  centeredSlides: true,
  centeredSlidesBounds: true,
  // centerInsufficientSlides: true,
  // initialSlide: 2,
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
  spaceBetween: 30,
  slidesPerView: "auto",
  centeredSlides: true,
  centeredSlidesBounds: true,
});

const swiperGallery = new Swiper("#swiper-gallery", {
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
  },
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
  // clickable: false,
  // allowSlideClick: false,
});

const swiperGalleryBig = new Swiper("#swiper-gallery-big", {
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
      slidesPerView: 1,
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
    nextEl: ".swiper-next-2",
    prevEl: ".swiper-prev-2",
  },
  spaceBetween: 20,
  slidesPerView: "auto",
  centeredSlides: true,
  centeredSlidesBounds: true,
  // clickable: false,
  // allowSlideClick: false,
});

// swiperGallery.on("click", function () {
//   var activeSlide = swiperGallery.slides[swiperGallery.activeIndex];
//   var largeImage = activeSlide
//     .querySelector("img")
//     .getAttribute("data-large-image");

//   // Замените изображение на более крупное изображение
//   activeSlide.querySelector("img").src = largeImage;

//   if (swiperGallery.params.slidesPerView === 2) {
//     swiperGallery.params.slidesPerView = 1;
//   } else {
//     swiperGallery.params.slidesPerView = 2;
//   }
//   swiperGallery.update();
// });
