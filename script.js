function toggleMenu() {
  document.getElementById("mobileMenu").classList.toggle("open");
}
const parts = document.querySelectorAll(".section-text2");
const dots = document.querySelectorAll(".timeline .dot");
let index = 0;

function showPart(i) {
  parts.forEach((part, idx) => {
    part.classList.toggle("active", idx === i);
    dots[idx].classList.toggle("active", idx === i);
  });
}

setInterval(() => {
  index = (index + 1) % parts.length;
  showPart(index);
}, 5000); // 5s
