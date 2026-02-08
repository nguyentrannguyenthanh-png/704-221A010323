window.addEventListener("scroll", function() {
  const scrolled = window.scrollY;
  const parallax = document.getElementById("parallax-bg");
  // Tốc độ 0.5 lần cuộn
  parallax.style.transform = "translateY(" + scrolled * 0.5 + "px)";
});