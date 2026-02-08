function toggleAccordion(id) {
  const content = document.getElementById(id);
  content.classList.toggle("active");
  content.style.maxHeight = content.classList.contains("active")
    ? content.scrollHeight + "px"
    : "0";
}