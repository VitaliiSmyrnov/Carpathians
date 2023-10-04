const ref = {
  upcomingTours: document.getElementById("swiper-upcoming-tours"),
};

// Hoverla tour
const hoverlaRefs = {
  detailButton: document.getElementById("hoverla-details-button"),
  tourHoverlaDetail: document.getElementById("tour-hoverla-detail"),
  closeButton: document.getElementById("hoverla-tour-close-button"),
};

hoverlaRefs.detailButton.addEventListener("click", hoverlaTourToggle);
hoverlaRefs.closeButton.addEventListener("click", hoverlaTourToggle);

function hoverlaTourToggle() {
  ref.upcomingTours.classList.toggle("hidden");
  hoverlaRefs.tourHoverlaDetail.classList.toggle("hidden");
}

// Bukovel tour
const bukovelRefs = {
  detailButton: document.getElementById("bukovel-details-button"),
  tourBukovelDetail: document.getElementById("tour-bukovel-detail"),
  closeButton: document.getElementById("bukovel-tour-close-button"),
};

bukovelRefs.detailButton.addEventListener("click", bukovelTourToggle);
bukovelRefs.closeButton.addEventListener("click", bukovelTourToggle);

function bukovelTourToggle() {
  ref.upcomingTours.classList.toggle("hidden");
  bukovelRefs.tourBukovelDetail.classList.toggle("hidden");
}
