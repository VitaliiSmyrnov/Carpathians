function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("element-show");
    }
  });
}

let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);

let topElements = document.querySelectorAll(".top-animation");
for (let elm of topElements) {
  observer.observe(elm);
}
let bottomElements = document.querySelectorAll(".bottom-animation");
for (let elm of bottomElements) {
  observer.observe(elm);
}
let leftElements = document.querySelectorAll(".left-animation");
for (let elm of leftElements) {
  observer.observe(elm);
}
let rightElements = document.querySelectorAll(".right-animation");
for (let elm of rightElements) {
  observer.observe(elm);
}
