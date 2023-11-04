const heroRefs = {
  heroOpenModalBtn: document.getElementById("hero-open-modal-button"),
  heroCloseModalBtn: document.getElementById("hero-close-modal-button"),
  heroBackdrop: document.getElementById("hero-backdrop"),
  heroModal: document.getElementById("hero-modal"),
  body: document.querySelector("body"),
};

heroRefs.heroOpenModalBtn.addEventListener("click", heroOpenModal);
heroRefs.heroCloseModalBtn.addEventListener("click", heroCloseModal);

function heroOpenModal() {
  heroRefs.heroModal.classList.remove("modal-hidden");
  heroRefs.heroModal.classList.add("modal-active");
  heroRefs.heroBackdrop.classList.remove("backdrop-hidden");
  heroRefs.heroBackdrop.classList.add("backdrop-active");
  heroRefs.body.classList.add("overflow-hidden");
}

function heroCloseModal() {
  heroRefs.heroModal.classList.remove("modal-active");
  heroRefs.heroModal.classList.add("modal-hidden");
  heroRefs.heroBackdrop.classList.remove("backdrop-active");
  heroRefs.heroBackdrop.classList.add("backdrop-hidden");
  heroRefs.body.classList.remove("overflow-hidden");
}

window.addEventListener("keydown", handleKeyDown);

function handleKeyDown(e) {
  if (e.code === "Escape") {
    heroCloseModal();
  }
}

heroRefs.heroBackdrop.addEventListener("click", handleBackDropClick);

function handleBackDropClick(e) {
  if (e.currentTarget === e.target) {
    heroCloseModal();
  }
}
