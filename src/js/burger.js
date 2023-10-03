const refs = {
  mobileMenu: document.querySelector("[data-menu]"),
  mobileMenuButton: document.querySelector("[data-menu-button]"),
  mobileMenuCloseButton: document.querySelector("[data-menu-close]"),
  heroSection: document.querySelector("[data-hero]"),
  logo: document.querySelector("[data-logo]"),
};

refs.mobileMenuButton.addEventListener("click", burgerMobile);

refs.mobileMenuCloseButton.addEventListener("click", burgerMobile);

function burgerMobile() {
  refs.mobileMenu.classList.toggle("-translate-x-full");
  refs.heroSection.classList.toggle("hidden");
  refs.mobileMenuButton.classList.toggle("hidden");
  refs.mobileMenuCloseButton.classList.toggle("hidden");
  refs.logo.classList.toggle("hidden");
}
