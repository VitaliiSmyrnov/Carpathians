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

  if (!refs.gallery.hasAttribute("style")) {
    refs.gallery.style.height = "812px";
    galleryWrapper.style.height = "732px";

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
  } else {
    refs.gallery.removeAttribute("style");
    galleryWrapper.removeAttribute("style");

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

window.addEventListener("resize", resizeGallery);

function resizeGallery() {
  const windowWidth = window.innerWidth;
  if (windowWidth >= 1440) return;

  if (refs.gallery.hasAttribute("style")) {
    const galleryWrapper = refs.gallery.firstElementChild;
    const pseudoGallerySlides = galleryWrapper.children;
    const gallerySlides = [...pseudoGallerySlides];

    refs.gallery.removeAttribute("style");
    galleryWrapper.removeAttribute("style");

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
}
