const refs = {
  heroOpenModalBtn: document.getElementById("hero-open-modal-button"),
  heroCloseModalBtn: document.getElementById("hero-close-modal-button"),
  heroBackdrop: document.getElementById("hero-backdrop"),
  heroModal: document.getElementById("hero-modal"),
  body: document.querySelector("body"),
};

// refs.heroOpenModalBtn.addEventListener("click", heroToggleModal);
// refs.heroCloseModalBtn.addEventListener("click", heroToggleModal);
refs.heroOpenModalBtn.addEventListener("click", heroOpenModal);
refs.heroCloseModalBtn.addEventListener("click", heroCloseModal);

function heroOpenModal() {
  refs.heroModal.classList.remove("modal-hidden");
  refs.heroModal.classList.add("modal-active");
  refs.heroBackdrop.classList.remove("backdrop-hidden");
  refs.heroBackdrop.classList.add("backdrop-active");
  refs.body.classList.add("overflow-hidden");
}

function heroCloseModal() {
  refs.heroModal.classList.remove("modal-active");
  refs.heroModal.classList.add("modal-hidden");
  refs.heroBackdrop.classList.remove("backdrop-active");
  refs.heroBackdrop.classList.add("backdrop-hidden");
  refs.body.classList.remove("overflow-hidden");
}

// function heroToggleModal() {
//   refs.heroModal.classList.toggle("hidden");
//   refs.heroModal.classList.toggle("flex");
//   refs.body.classList.toggle("overflow-hidden");
// }

window.addEventListener("keydown", handleKeyDown);

function handleKeyDown(e) {
  if (e.code === "Escape") {
    // heroToggleModal();
    heroCloseModal();
  }
}

refs.heroBackdrop.addEventListener("click", handleBackDropClick);

function handleBackDropClick(e) {
  if (e.currentTarget === e.target) {
    // heroToggleModal();
    heroCloseModal();
  }
}
