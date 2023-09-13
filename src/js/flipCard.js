const refs = {
  reviewCard1: document.getElementById("review-card-1"),
  reviewCard2: document.getElementById("review-card-2"),
  reviewFrontToggle1: document.getElementById("review-front-flip-toggle-1"),
  reviewFrontToggle2: document.getElementById("review-front-flip-toggle-2"),
  reviewBackToggle1: document.getElementById("review-back-flip-toggle-1"),
  reviewBackToggle2: document.getElementById("review-back-flip-toggle-2"),
};

refs.reviewFrontToggle1.addEventListener("click", toggleReviewCard1);
refs.reviewBackToggle1.addEventListener("click", toggleReviewCard1);
refs.reviewFrontToggle2.addEventListener("click", toggleReviewCard2);
refs.reviewBackToggle2.addEventListener("click", toggleReviewCard2);

function toggleReviewCard1() {
  refs.reviewCard1.classList.toggle("is-flipped");
}

function toggleReviewCard2() {
  refs.reviewCard2.classList.toggle("is-flipped");
}
