const burgerRefs = {
  mobileMenu: document.querySelector("[data-menu]"),
  mobileMenuButton: document.querySelector("[data-menu-button]"),
  mobileMenuCloseButton: document.querySelector("[data-menu-close]"),
  heroSection: document.querySelector("[data-hero]"),
  logo: document.querySelector("[data-logo]"),
};

burgerRefs.mobileMenuButton.addEventListener("click", burgerMobile);

burgerRefs.mobileMenuCloseButton.addEventListener("click", burgerMobile);

burgerRefs.mobileMenu.addEventListener("click", burgerLinks);

function burgerMobile() {
  burgerRefs.mobileMenu.classList.toggle("-translate-x-full");
  burgerRefs.mobileMenu.classList.toggle("backdrop-hidden");
  burgerRefs.heroSection.classList.toggle("hidden");
  burgerRefs.mobileMenuButton.classList.toggle("hidden");
  burgerRefs.mobileMenuCloseButton.classList.toggle("hidden");
  burgerRefs.logo.classList.toggle("hidden");
}

function burgerLinks(event) {
  if (event.target.nodeName !== "A") {
    return;
  }

  burgerMobile();
}
