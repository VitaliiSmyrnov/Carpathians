const flipRefs = {
  reviewCard1: document.getElementById("review-card-1"),
  reviewCard2: document.getElementById("review-card-2"),
  reviewCard3: document.getElementById("review-card-3"),
  reviewFrontToggle1: document.getElementById("review-front-flip-toggle-1"),
  reviewFrontToggle2: document.getElementById("review-front-flip-toggle-2"),
  reviewFrontToggle3: document.getElementById("review-front-flip-toggle-3"),
  reviewBackToggle1: document.getElementById("review-back-flip-toggle-1"),
  reviewBackToggle2: document.getElementById("review-back-flip-toggle-2"),
  reviewBackToggle3: document.getElementById("review-back-flip-toggle-3"),
};

flipRefs.reviewFrontToggle1.addEventListener("click", toggleReviewCard1);
flipRefs.reviewBackToggle1.addEventListener("click", toggleReviewCard1);
flipRefs.reviewFrontToggle2.addEventListener("click", toggleReviewCard2);
flipRefs.reviewBackToggle2.addEventListener("click", toggleReviewCard2);
flipRefs.reviewFrontToggle3.addEventListener("click", toggleReviewCard3);
flipRefs.reviewBackToggle3.addEventListener("click", toggleReviewCard3);

function toggleReviewCard1() {
  flipRefs.reviewCard1.classList.toggle("is-flipped");
}

function toggleReviewCard2() {
  flipRefs.reviewCard2.classList.toggle("is-flipped");
}

function toggleReviewCard3() {
  flipRefs.reviewCard3.classList.toggle("is-flipped");
}
