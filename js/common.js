const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".nav__menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// <!-- Initialize Swiper -->

var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 3000,
  },
});

function togglePopup() {
  document.getElementById("popup-1").classList.toggle("active");
}

function closeBtn() {
  document.getElementById("popup-1").classList.remove("active");
  document.getElementById("player").src += "";
}

// Flickity slide
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

// 기업증명서 slider
let slides = document.querySelector(".slides"),
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
  if (currentIdx < slideCount - 4) {
    moveSlide(currentIdx + 1);
  } else {
    moveSlide(0);
  }
});

prevBtn.addEventListener("click", function () {
  if (currentIdx > 0) {
    moveSlide(currentIdx - 1);
  } else {
    moveSlide(slideCount - 4);
  }
});

let popup_cert1 = document.getElementById("cert_slide_content");

function cert_Popup() {
  popup_cert1.classList.add("cert_slide_content_open");
}

function cert_close_Popup() {
  popup_cert1.classList.remove("cert_slide_content_open");
}

// 특허 및 MOU slider
let slides2 = document.querySelector(".slides2"),
  slide2 = document.querySelectorAll(".slides2 li"),
  currentIdx2 = 0;
(slideCount2 = slide2.length),
  (slidewidth2 = 400),
  (slideMargin2 = 40),
  (nextBtn2 = document.querySelector(".next_slide2")),
  (prevBtn2 = document.querySelector(".prev_slide2"));

slides2.style.width =
  (slidewidth2 + slideMargin2) * slideCount2 - slideMargin2 + "px";

function moveSlide2(num) {
  slides2.style.left = -num * 440 + "px";
  currentIdx2 = num;
}

nextBtn2.addEventListener("click", function () {
  if (currentIdx2 < slideCount2 - 5) {
    moveSlide2(currentIdx2 + 1);
  } else {
    moveSlide2(0);
  }
});

prevBtn2.addEventListener("click", function () {
  if (currentIdx2 > 0) {
    moveSlide2(currentIdx2 - 1);
  } else {
    moveSlide2(slideCount2 - 5);
  }
});

let popup_cert2 = document.getElementById("cert_slide_content2");

function cert_Popup2() {
  popup_cert2.classList.add("cert_slide_content_open2");
}

function cert_close_Popup2() {
  popup_cert2.classList.remove("cert_slide_content_open2");
}

// badge

const badgeEl = document.querySelector(".badges");

window.addEventListener(
  "scroll",
  _.throttle(function () {
    if (window.scrollY > 500) {
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none",
      });
      //gsap.to(요소, 지속시간, 옵션)
    } else {
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
    }
  }, 300)
);
// _.throttle(함수, 시간)

const fadeEls = document.querySelectorAll(".visual .fade-in");

fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.5, //0.7 1.4 2.1 2.7
    opacity: 1,
  });
});

// 다운로드 링크 PC/모바일
let downclick_m = document.getElementById("btn_download");
let mql = window.matchMedia("screen and (max-width: 768px)");

if (mql.matches) {
  downclick_m.addEventListener("click", function () {
    alert(
      `PC버전은 PC에서 다운로드가 가능합니다. 모바일 어플 다운로드는 준비중에 있습니다.`
    );
  });
  // console.log("화면의 너비가 768px 보다 작습니다.");
} else {
  downclick_m.addEventListener("click", function () {
    location.href = "https://works.do/5j6rGoK";
  });
  // console.log("화면의 너비가 768px 보다 큽니다.");
}
