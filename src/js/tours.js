const refs = {
  upcomingTours: document.getElementById("swiper-upcoming-tours"),
  tourHoverlaDetailButton: document.getElementById("hoverla-details-button"),
  tourBukovelDetailButton: document.getElementById("bukovel-details-button"),
  tourHoverlaDetail: document.getElementById("tour-hoverla-detail"),
  tourBukovelDetail: document.getElementById("tour-bukovel-detail"),
  tourDetailCloseButton: document.querySelector("[data-tour-detail-close]"),
};

refs.tourHoverlaDetailButton.addEventListener("click", getHoverlaTourDetail);

function getHoverlaTourDetail() {
  refs.upcomingTours.classList.add("hidden");
  refs.tourHoverlaDetail.classList.remove("hidden");
}

refs.tourBukovelDetailButton.addEventListener("click", getBukovelTourDetail);

function getBukovelTourDetail() {
  refs.upcomingTours.classList.add("hidden");
  refs.tourHoverlaDetail.classList.remove("hidden");
}

refs.tourDetailCloseButton.addEventListener("click", closeAllToursDetails);

function closeAllToursDetails() {
  refs.tourHoverlaDetail.classList.add("hidden");
  refs.tourBukovelDetail.classList.add("hidden");
  refs.upcomingTours.classList.remove("hidden");
}
