let index = 0;
const slides = document.getElementById("slides");
const total = slides.children.length;

function showSlide(i) {
  index = (i + total) % total;
  slides.style.transform = "translateX(" + (-index * 100) + "%)";
}
function moveSlide(step) { showSlide(index + step); }
setInterval(() => moveSlide(1), 3000);