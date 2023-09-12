const reviewCard1 = document.getElementById("review-card-1");
const reviewCard2 = document.getElementById("review-card-2");

const reviewFrontToggle1 = document.getElementById(
  "review-front-flip-toggle-1",
);
const reviewFrontToggle2 = document.getElementById(
  "review-front-flip-toggle-2",
);

const reviewBackToggle1 = document.getElementById("review-back-flip-toggle-1");
const reviewBackToggle2 = document.getElementById("review-back-flip-toggle-2");

reviewFrontToggle1.addEventListener("click", function () {
  reviewCard1.classList.toggle("is-flipped");
});

reviewBackToggle1.addEventListener("click", function () {
  reviewCard1.classList.toggle("is-flipped");
});

reviewFrontToggle2.addEventListener("click", function () {
  reviewCard2.classList.toggle("is-flipped");
});

reviewBackToggle2.addEventListener("click", function () {
  reviewCard2.classList.toggle("is-flipped");
});
