const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".nav__menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// <!-- Initialize Swiper -->

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});

function togglePopup() {
  document.getElementById("popup-1").classList.toggle("active");
}

var elem = document.querySelector(".grid-slider-wrap");
var flkty = new Flickity(elem, {
  // options
  cellAlign: "center",
  contain: true,
  groupCells: true,
  wrapAround: true,
  pageDots: false,
});
