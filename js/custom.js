const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".nav__menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// <!-- Initialize Swiper -->

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

function togglePopup() {
  document.getElementById("popup-1").classList.toggle("active");
}


