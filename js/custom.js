const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".nav__menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
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
