const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".nav__menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// <!-- Initialize Swiper -->

var swiper = new Swiper(".mySwiper", {});

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

var elem = document.querySelector(".grid-slider-wrap2");
var flkty = new Flickity(elem, {
  // options
  cellAlign: "center",
  contain: true,
  groupCells: true,
  wrapAround: true,
  pageDots: false,
});

// certification slide
var slides = document.querySelector(".slides"),
  slide = document.querySelectorAll(".slides li"),
  currentIdx = 0;
(slideCount = slide.length),
  (slidewidth = 400),
  (slideMargin = 40),
  (nextBtn = document.querySelector(".next_slide")),
  (prevBtn = document.querySelector(".prev_slide"));

slides.style.width =
  (slidewidth + slideMargin) * slideCount - slideMargin + "px";

function moveSlide(num) {
  slides.style.left = -num * 440 + "px";
  currentIdx = num;
}

nextBtn.addEventListener("click", function () {
  if (currentIdx < slideCount - 8) {
    moveSlide(currentIdx + 1);
  } else {
    moveSlide(0);
  }
});

prevBtn.addEventListener("click", function () {
  if (currentIdx > 0) {
    moveSlide(currentIdx - 1);
  } else {
    moveSlide(slideCount - 10);
  }
});

//인증서보기 버튼 클릭시 slidewrapper가 켜짐

function cert_Popup() {
  const popup_cert = document.getElementById("cert_slide_content");
  popup_cert.style.display = "block";
}

function cert_close_Popup() {
  const popup_cert = document.getElementById("cert_slide_content");
  popup_cert.style.display = " none";
}
