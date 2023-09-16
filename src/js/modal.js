const refs = {
  heroOpenModalBtn: document.getElementById("hero-open-modal-button"),
  heroCloseModalBtn: document.getElementById("hero-close-modal-button"),
  heroModal: document.getElementById("hero-modal"),
};

refs.heroOpenModalBtn.addEventListener("click", heroToggleModal);
refs.heroCloseModalBtn.addEventListener("click", heroToggleModal);

function heroToggleModal() {
  refs.heroModal.classList.toggle("hidden");
}
