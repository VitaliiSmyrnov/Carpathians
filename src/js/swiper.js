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
    1440: {
      slidesPerView: "auto",
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
});

const refs = {
  gallery: document.getElementById("swiper-gallery"),
};

refs.gallery.addEventListener("click", toggleGallery);

function toggleGallery(event) {
  const windowWidth = window.innerWidth;
  if (event.target.nodeName !== "IMG" || windowWidth < 1440) {
    return;
  }

  const galleryWrapper = refs.gallery.firstElementChild;
  const pseudoGallerySlides = galleryWrapper.children;
  const gallerySlides = [...pseudoGallerySlides];

  if (refs.gallery.classList.contains("lg:h-[525px]")) {
    refs.gallery.classList.replace("lg:h-[525px]", "lg:h-[812px]");
    galleryWrapper.classList.replace("lg:h-[445px]", "lg:h-[732px]");

    gallerySlides.forEach((slide, index) => {
      slide.classList.replace("lg:w-[575px]", "lg:w-[1170px]");

      const sourceSlide = slide.querySelector(
        'source[media="(min-width: 1440px)"]',
      );

      if (sourceSlide) {
        sourceSlide.setAttribute(
          "srcset",
          `
          ./public/images/desktop-opt/gallery_desktop-big-${
            index + 1
          }.jpg    1x,
          ./public/images/desktop-opt/gallery_desktop-big-${index + 1}@2x.jpg 2x
        `,
        );
      }
    });
  } else if (refs.gallery.classList.contains("lg:h-[812px]")) {
    refs.gallery.classList.replace("lg:h-[812px]", "lg:h-[525px]");
    galleryWrapper.classList.replace("lg:h-[732px]", "lg:h-[445px]");

    gallerySlides.forEach((slide, index) => {
      slide.classList.replace("lg:w-[1170px]", "lg:w-[575px]");

      const sourceSlide = slide.querySelector(
        'source[media="(min-width: 1440px)"]',
      );

      if (sourceSlide) {
        sourceSlide.setAttribute(
          "srcset",
          `
          ./public/images/desktop-opt/gallery_desktop-${
            index + 1
          }-min.jpg    1x,
          ./public/images/desktop-opt/gallery_desktop-${index + 1}-min@2x.jpg 2x
        `,
        );
      }
    });
  }

  const clickedIndex = swiperGallery.clickedIndex;
  swiperGallery.update();
  swiperGallery.slideTo(clickedIndex);
}
