// 처음 문여는 이벤트 관련 JS
// const mascot = document.querySelector(".mascot");
// const circleCon = document.querySelector(".circle-con");
// const door1 = document.querySelector(".door-1");
// const door2 = document.querySelector(".door-2");

// window.onload = () => {
//   window.scrollTo(0, -100);
// };

// mascot.addEventListener("click", (e) => {
//   door1.classList.add("active");
//   door2.classList.add("active");
//   circleCon.classList.add("active");
//   e.target.classList.add("active");
//   document.body.style.overflowY = "auto";
//   setTimeout(() => {
//     door1.style.display = "none";
//     door2.style.display = "none";
//   }, 4500);
// });

const contents = document.querySelectorAll(".content");
const wheelDown = document.querySelector(".wheel-down");
const rightRect = document.querySelector(".right-rect");

let scrollHeight = document.body.scrollHeight - window.innerHeight;

const resize = () => {
  scrollHeight = document.body.scrollHeight - window.innerHeight;
  door1.style.width = "50vw";
  door2.style.width = "50vw";
};

const isBetween = (lowNum, targetNum, highNum) => {
  if (lowNum < targetNum && targetNum <= highNum) {
    return true;
  } else {
    return false;
  }
};

const contentChange = ({ imgUrl, title, main, address }) => {};

window.addEventListener("scroll", (e) => {
  const scrollRatio = Math.floor((scrollY / scrollHeight) * 100);
  console.log(scrollRatio / 10);
  if (isBetween(0, scrollRatio, 10)) {
    wheelDown.style.opacity = `${1 - scrollRatio / 10}`;
  } else if (isBetween(14, scrollRatio, 20)) {
    const img = contents[0].querySelector(".img");
    const comment = contents[0].querySelector(".comment");
    img.classList.add("active");
    rightRect.classList.add("active");
    contents[0].classList.add("active");
    comment.classList.add("active");
  }
});

window.addEventListener("resize", () => {
  console.log("resize", scrollHeight);
  resize();
});
