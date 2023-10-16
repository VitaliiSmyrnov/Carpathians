const refs = {
  galleryMin: document.getElementById("swiper-gallery"),
  galleryBig: document.getElementById("swiper-gallery-big"),
};

const slideMinRefs = {
  1: document.getElementById("gallery-slide-min-1"),
  2: document.getElementById("gallery-slide-min-2"),
  3: document.getElementById("gallery-slide-min-3"),
  4: document.getElementById("gallery-slide-min-4"),
  5: document.getElementById("gallery-slide-min-5"),
  6: document.getElementById("gallery-slide-min-6"),
  7: document.getElementById("gallery-slide-min-7"),
  8: document.getElementById("gallery-slide-min-8"),
};

const slideBigRefs = {
  1: document.getElementById("gallery-slide-big-1"),
  2: document.getElementById("gallery-slide-big-2"),
  3: document.getElementById("gallery-slide-big-3"),
  4: document.getElementById("gallery-slide-big-4"),
  5: document.getElementById("gallery-slide-big-5"),
  6: document.getElementById("gallery-slide-big-6"),
  7: document.getElementById("gallery-slide-big-7"),
  8: document.getElementById("gallery-slide-big-8"),
};

refs.galleryMin.addEventListener("click", toggleGallery);
refs.galleryBig.addEventListener("click", toggleGallery);

function toggleGallery(event) {
  if (event.target.nodeName !== "PICTURE") {
    return;
  }
  console.log("tupok");
  refs.galleryMin.classList.toggle("hidden");
  refs.galleryBig.classList.toggle("hidden");
}

// function toggleGalleryMin(event) {
//   if (event.target.nodeName !== "PICTURE") {
//     return;
//   }

//   refs.galleryMin.classList.toggle("hidden");
//   refs.galleryBig.classList.toggle("hidden");
// }

// function toggleGalleryBig(event) {
//   if (event.target.nodeName !== "PICTURE") {
//     return;
//   }

//   refs.galleryBig.classList.toggle("hidden");
//   refs.galleryMin.classList.toggle("hidden");
// }
